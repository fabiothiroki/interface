import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Fund from ".";

describe("Fund", () => {
  it("should render without error", () => {
    renderComponent(<Fund />);

    expectTextToBeInTheDocument("Fund");
  });
});
