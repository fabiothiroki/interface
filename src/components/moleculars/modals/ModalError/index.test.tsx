import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalError from ".";

describe("ModalError", () => {
  it("should render without error", () => {
    renderComponent(<ModalError title="ModalError" visible />);
    expect(screen.getByText("ModalError")).toBeInTheDocument();
  });
});
