import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Button from ".";

describe("<Button />", () => {
  it("should render the heading", () => {
    const props = {
      text: "apertar",
      onClick: jest.fn(),
    };

    renderComponent(<Button {...props} />);
    expectTextToBeInTheDocument(props.text);
  });
});
