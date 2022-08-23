import { clickOn, renderComponent } from "config/testUtils";
import {
  expectLogEventToHaveBeenCalledWith,
  expectPageToNavigateTo,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import TreasurePage from ".";

describe("TreasurePage", () => {
  it("should render without error", () => {
    renderComponent(<TreasurePage />);

    expectTextToBeInTheDocument("Donation treasure");
  });

  it("logs the fundScreen_view event when loaded", () => {
    renderComponent(<TreasurePage />);

    expectLogEventToHaveBeenCalledWith("fundScreen_view");
  });

  describe("when there is a wallet connected", () => {
    beforeEach(() => {
      renderComponent(<TreasurePage />, {
        walletProviderValue: {
          wallet: "0xFFFF",
        },
      });
    });

    describe("when the support fund button is clicked", () => {
      beforeEach(() => {
        clickOn("Support the treasure");
      });

      it("logs the fundSupportBtn_click event", () => {
        expectLogEventToHaveBeenCalledWith("fundSupportBtn_click", {
          from: "fundBalance",
        });
      });

      it("navigates to the support fund page", () => {
        expectPageToNavigateTo("/promoters/support-fund");
      });
    });
  });
});
