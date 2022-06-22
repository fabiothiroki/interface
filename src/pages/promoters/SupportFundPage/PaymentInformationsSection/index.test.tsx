import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import PaymentInformations from ".";

describe("BillingInformationSection", () => {
  it("should render without error", () => {
    renderComponent(<PaymentInformations />);

    expectTextToBeInTheDocument("Forma de pagamento");
  });
});
