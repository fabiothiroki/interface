import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Header from ".";

describe("Header", () => {
  it("should render without error", () => {
    renderComponent(<Header />);

    expectTextToBeInTheDocument("Header");
  });
});
