import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import Carousel from ".";

describe("Carousel", () => {
  it("should render without error", () => {
    renderComponent(
      <Carousel>
        <div>1</div>
        <div>2</div>
      </Carousel>,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
