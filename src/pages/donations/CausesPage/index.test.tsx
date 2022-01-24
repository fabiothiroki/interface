import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Causes from ".";

describe("Causes", () => {
  it("should render without error", () => {
    renderComponent(<Causes />);
    expect(screen.getByText("Causes")).toBeInTheDocument();
  });
});
