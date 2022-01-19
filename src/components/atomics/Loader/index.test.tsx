import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Loader from ".";

describe("Loader", () => {
  it("should render without error", () => {
    renderComponent(<Loader />);
    expect(screen.getByText("Loader")).toBeInTheDocument();
  });
});
