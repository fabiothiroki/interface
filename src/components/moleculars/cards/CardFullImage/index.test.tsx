import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import CardFullImage from ".";

describe("CardFullImage", () => {
  it("should render without error", () => {
    renderComponent(<CardFullImage roundImage="" title="CardFullImage" />);
    expect(screen.getByText("CardFullImage")).toBeInTheDocument();
  });
});
