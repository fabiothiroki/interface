import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Impact from ".";

describe("Impact", () => {
  it("should render without error", () => {
    renderComponent(<Impact />);

    expectTextToBeInTheDocument("Impact");
  });
});
