import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { useModal } from ".";

function ModalTestPage() {
  useModal();
  return <div>Modal</div>;
}

describe("useModal", () => {
  it("renders without error", () => {
    renderComponent(<ModalTestPage />);
    expectTextToBeInTheDocument("Modal");
  });
});
