import React from "react";
import { screen, render } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  it("should render without error", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
