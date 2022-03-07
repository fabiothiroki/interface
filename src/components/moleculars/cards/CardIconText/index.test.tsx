import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardIconText from ".";

describe("CardIconText", () => {
  it("should render without error", () => {
    renderComponent(<CardIconText text="CardIconText" icon="" />);

    expectTextToBeInTheDocument("CardIconText");
  });
});
