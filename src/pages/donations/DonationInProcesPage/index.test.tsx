import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import DonationInProcesPage from ".";

describe("DonationInProcesPage", () => {
  it("should render without error", () => {
    renderComponent(<DonationInProcesPage />);

    expectTextToBeInTheDocument("DonationInProcesPage");
  });
});
