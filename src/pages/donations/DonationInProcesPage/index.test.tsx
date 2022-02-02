import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import DonationInProcesPage from ".";

describe("DonationInProcesPage", () => {
  it("should render without error", () => {
    renderComponent(<DonationInProcesPage />);

    expectTextToBeInTheDocument("Donating...");
    expectTextToBeInTheDocument(
      "Ribon’s supporters are those responsible for paying for the free donations",
    );
  });
});
