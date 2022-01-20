import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Home from ".";

describe("Home", () => {
  it("should render without error", () => {
    renderComponent(<Home />);
    expect(screen.getByText("Conectar Carteira")).toBeInTheDocument();
  });
});
