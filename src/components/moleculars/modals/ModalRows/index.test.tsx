import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import icon from "assets/icons/ribon.svg";
import ModalRows from ".";

describe("ModalRows", () => {
  it("should render without error", () => {
    renderComponent(
      <ModalRows
        rowsContent={[
          {
            id: 1,
            icon,
            text: "rows",
          },
        ]}
        visible
      />,
    );
    expect(screen.getByText("rows")).toBeInTheDocument();
  });
});
