import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ModalBlocked from ".";

describe("ModalBlocked", () => {
  it("should render without error", () => {
    renderComponent(<ModalBlocked />);

    expectTextToBeInTheDocument("ModalBlocked");
  });
});
