import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalIcon from ".";

describe("ModalIcon", () => {
  it("should render without error", () => {
    renderComponent(<ModalIcon title="ModalIcon" visible />);
    expect(screen.getByText("ModalIcon")).toBeInTheDocument();
  });
});
