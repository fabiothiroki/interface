import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import DonationDone from ".";

describe("DonationDone", () => {
  it("should render without error", () => {
    renderComponent(<DonationDone />);

    expectTextToBeInTheDocument("DonationDone");
  });
});
