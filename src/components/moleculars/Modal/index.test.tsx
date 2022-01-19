import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Modal from ".";

describe("Modal", () => {
  it("should render without error", () => {
    renderComponent(<Modal />);
    expect(screen.getByText("Modal")).toBeInTheDocument();
  });
});
