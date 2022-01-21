import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import CardSideImageButton from "./index";

describe("CardSideImageButton", () => {
  it("should render without error", () => {
    renderComponent(
      <CardSideImageButton
        buttonText="text"
        onClick={() => {}}
        icon=""
        title="title"
      />,
    );
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
