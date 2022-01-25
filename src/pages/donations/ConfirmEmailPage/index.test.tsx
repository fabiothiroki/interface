import React from "react";
import { renderComponent } from "config/testUtils";
import ConfirmEmail from ".";

describe("ConfirmEmail", () => {
  it("should render without error", () => {
    renderComponent(<ConfirmEmail />);
  });
});
