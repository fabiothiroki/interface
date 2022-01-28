import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardRoundDoubleImage from ".";

describe("CardRoundDoubleImage", () => {
  it("should render without error", () => {
    renderComponent(<CardRoundDoubleImage />);

    expectTextToBeInTheDocument("CardRoundDoubleImage");
  });
});
