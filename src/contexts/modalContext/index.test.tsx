import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { useModalContext } from ".";

function ModalTestPage() {
  useModalContext();
  return <div>Modal</div>;
}

describe("useModalContext", () => {
  it("renders without error", () => {
    renderComponent(<ModalTestPage />);
    expectTextToBeInTheDocument("Modal");
  });
});
