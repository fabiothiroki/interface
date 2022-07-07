import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { useNetwork } from ".";

function NetworkTestPage() {
  useNetwork();
  return <div>Network</div>;
}

describe("useNetwork", () => {
  it("renders without error", () => {
    renderComponent(<NetworkTestPage />);
    expectTextToBeInTheDocument("Network");
  });
});
