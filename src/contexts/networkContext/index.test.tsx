import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { useNetworkContext } from ".";

function NetworkTestPage() {
  useNetworkContext();
  return <div>Network</div>;
}

describe("useNetwork", () => {
  it("renders without error", () => {
    renderComponent(<NetworkTestPage />);
    expectTextToBeInTheDocument("Network");
  });
});
