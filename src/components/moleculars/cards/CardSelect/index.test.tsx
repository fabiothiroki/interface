import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import CardSelect from ".";

describe("CardSelect", () => {
  it("should render without error", () => {
    renderComponent(
      <CardSelect dropdownProps={{ name: "", label: "", values: [] }} />,
    );

    expectTextToBeInTheDocument("CardSelect");
  });
});
