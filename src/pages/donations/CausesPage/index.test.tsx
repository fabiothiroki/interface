import React from "react";
import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Header from "components/atomics/sections/Header";
import Causes from ".";

// jest.mock("components/atomics/sections/Header", () => jest.fn(() => <div />));
// const spy = jest.spyOn(Header, "Header");

describe("Causes", () => {
  beforeEach(() => {
    renderComponent(<Causes />);
  });

  it("renders the title", () => {
    expectTextToBeInTheDocument("Causes");
  });

  it("renders the subtitle", () => {
    expectTextToBeInTheDocument("Donate for free for a cause of your choice");
  });

  xit("renders the header", () => {
    expect(Header).toHaveBeenCalled();
  });
});
