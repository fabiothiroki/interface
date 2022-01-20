import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Button from ".";

describe("<Button />", () => {
  it("should render the heading", () => {
    const props = {
      text: "apertar",
      onClick: jest.fn(),
    };

    renderComponent(<Button {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
