import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Arrow from ".";

describe("Arrow", () => {
  it("should render without error", () => {
    renderComponent(
      <Arrow direction="left" onClick={() => {}} disabled={false} />,
    );
    expect(screen.getByText("Arrow")).toBeInTheDocument();
  });
});
