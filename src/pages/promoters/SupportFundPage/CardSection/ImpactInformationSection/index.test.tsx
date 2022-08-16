import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ImpactInformationSection from ".";

describe("ImpactInformationSection", () => {
  it("should render without error", () => {
    renderComponent(<ImpactInformationSection />);

    expectTextToBeInTheDocument("Choose your giving");
  });
});
