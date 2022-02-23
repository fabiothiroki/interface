import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardSideImage from ".";

describe("CardSideImage", () => {
  it("should render without error", () => {
    renderComponent(<CardSideImage />);

    expectTextToBeInTheDocument("CardSideImage");
  });
});
