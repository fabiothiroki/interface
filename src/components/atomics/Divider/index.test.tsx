import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Divider from ".";

describe("Divider", () => {
  it("should render without error", () => {
    renderComponent(<Divider text="Divider" />);
    expect(screen.getByText("Divider")).toBeInTheDocument();
  });
});
