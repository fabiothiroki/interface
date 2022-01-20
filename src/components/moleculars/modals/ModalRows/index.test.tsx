import React from "react";
import { screen, } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalRows from ".";

describe("ModalRows", () => {
  it("should render without error", () => {
    renderComponent(<ModalRows />);
    expect(screen.getByText("ModalRows")).toBeInTheDocument();
  });
});
