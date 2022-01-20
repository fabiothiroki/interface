import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import SliderImage from ".";

describe("SliderImage", () => {
  it("should render without error", () => {
    renderComponent(<SliderImage sliderImages={[{ imageUrl: "" }]} />);
    expect(screen.getByText("SliderImage")).toBeInTheDocument();
  });
});
