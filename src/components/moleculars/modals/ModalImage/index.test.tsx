import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalImage from ".";

describe("ModalImage", () => {
  it("should render without error", () => {
    renderComponent(<ModalImage />);
    expect(screen.getByText("ModalImage")).toBeInTheDocument();
  });
});
