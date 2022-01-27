import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardRoundImage from ".";

describe("CardRoundImage", () => {
  it("should render without error", () => {
    renderComponent(<CardRoundImage />);

    expectTextToBeInTheDocument("CardRoundImage");
  });
});
