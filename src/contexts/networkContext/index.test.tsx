import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { renderHook } from "config/testUtils/renders";
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

  it("get the current network", async () => {
    const getCurrentNetwork = jest.fn();
    renderComponent(<NetworkTestPage />);

    expect(getCurrentNetwork).toHaveBeenCalled();
  });
});
