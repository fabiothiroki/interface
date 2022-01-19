import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  it("should render the heading", () => {
    const props = {
      text: "apertar",
      onClick: jest.fn(),
    };

    render(<Button {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
