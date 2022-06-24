import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import PaymentInformation from ".";

describe("BillingInformationSection", () => {
  it("should render without error", () => {
    renderComponent(<PaymentInformation />);

    expectTextToBeInTheDocument("Forma de pagamento");
  });
});
