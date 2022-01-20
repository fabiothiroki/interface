import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import RibonsSparkleNumber from ".";

describe("RibonsSparkleNumber", () => {
  it("should render without error", () => {
    renderComponent(<RibonsSparkleNumber ribons={100} />);
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
