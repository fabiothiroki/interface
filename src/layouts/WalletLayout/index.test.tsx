import { renderComponent } from "config/testUtils/renders";
import {
  expectTextNotToBeInTheDocument,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import WalletLayout from ".";

describe("WalletLayout", () => {
  it("renders the children passed", () => {
    renderComponent(
      <WalletLayout hideNavigation>
        <div>test</div>
      </WalletLayout>,
    );

    expectTextToBeInTheDocument("test");
  });

  describe("when hide navigation is passed", () => {
    it("hides the navigation section", () => {
      renderComponent(
        <WalletLayout hideNavigation>
          <div>test</div>
        </WalletLayout>,
      );

      expectTextNotToBeInTheDocument("Treasure");
      expectTextNotToBeInTheDocument("Causes");
      expectTextNotToBeInTheDocument("Impact");
    });
  });
});
