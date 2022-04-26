import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalOnboarding from ".";

describe("ModalOnboarding", () => {
  it("should render without error", () => {
    renderComponent(<ModalOnboarding />);

    expectTextToBeInTheDocument("ModalOnboarding");
  });
});
