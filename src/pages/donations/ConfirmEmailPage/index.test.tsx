import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ConfirmEmail from ".";

describe("ConfirmEmail", () => {
  it("should render without error", () => {
    renderComponent(<ConfirmEmail />);
    expect(screen.getByText("ConfirmEmail")).toBeInTheDocument();
  });
});
