import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ModalAnimation from ".";

describe("ModalAnimation", () => {
  it("should render without error", () => {
    renderComponent(<ModalAnimation />);

    expectTextToBeInTheDocument("ModalAnimation");
  });
});
