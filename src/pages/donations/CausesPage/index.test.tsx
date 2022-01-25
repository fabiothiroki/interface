import React from "react";
import { renderComponent } from "config/testUtils";
import Causes from ".";

describe("Causes", () => {
  it("should render without error", () => {
    renderComponent(<Causes />);
  });
});
