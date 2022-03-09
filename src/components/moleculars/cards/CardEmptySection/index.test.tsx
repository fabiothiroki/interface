import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import CardEmptySection from ".";

describe("CardEmptySection", () => {
  it("should render without error", () => {
    renderComponent(<CardEmptySection cardText="oi" btnText="hello" />);

    expectTextToBeInTheDocument("CardEmptySection");
  });
});
