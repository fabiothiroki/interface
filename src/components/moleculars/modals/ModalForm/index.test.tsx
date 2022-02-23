import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalFormEmailConfirm from ".";

describe("ModalFormEmailConfirm", () => {
  it("should render without error", () => {
    renderComponent(<ModalFormEmailConfirm />);

    expectTextToBeInTheDocument("ModalFormEmailConfirm");
  });
});
