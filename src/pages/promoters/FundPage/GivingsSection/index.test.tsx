import { clickOn, renderComponent, waitForPromises } from "config/testUtils";
import {
  expectLogEventToHaveBeenCalledWith,
  expectPageToNavigateTo,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import { client } from "services/apiTheGraph";
import promoterDonationFactory from "config/testUtils/factories/promoterDonationFactory";
import GivingsSection from ".";

const querySpy = jest.spyOn(client, "query");

describe("GivingsSection", () => {
  it("should render without error", () => {
    renderComponent(<GivingsSection />);

    expectTextToBeInTheDocument("Your givings");
  });

  describe("when there is a wallet connected", () => {
    describe("when the promoter has no givings", () => {
      beforeEach(async () => {
        renderComponent(<GivingsSection />, {
          walletProviderValue: {
            wallet: "0xFFFF",
          },
        });

        await waitForPromises();
      });

      it("render give now card", () => {
        expectTextToBeInTheDocument("Give now");
      });

      describe("when the give now button is clicked", () => {
        beforeEach(() => {
          clickOn("Give now");
        });

        it("logs the fundSupportBtn_click event", () => {
          expectLogEventToHaveBeenCalledWith("fundSupportBtn_click", {
            from: "giveNow",
          });
        });

        it("navigates to the support fund page", () => {
          expectPageToNavigateTo("/promoters/support-fund");
        });
      });

      describe.skip("when the show your givings card is clicked", () => {
        beforeEach(() => {
          clickOn("Show your givings");
        });

        it("logs the fundShowGivingsListBtn_click event", () => {
          expectLogEventToHaveBeenCalledWith("fundShowGivingsListBtn_click", {
            from: "yourGivingsCarousel",
          });
        });

        it("navigates to the you givings page", () => {
          expectPageToNavigateTo("/promoters/show-givings");
        });
      });
    });

    describe("when the promoter has givings", () => {
      beforeEach(async () => {
        const fiftyCent = "500000000000000000";

        querySpy.mockResolvedValue({
          data: {
            promoterDonations: [
              promoterDonationFactory({
                amountDonated: fiftyCent,
              }),
            ],
          },
          loading: true,
          networkStatus: 1,
        });
        renderComponent(<GivingsSection />, {
          walletProviderValue: {
            wallet: "0xFFFF",
          },
        });

        await waitForPromises();
      });

      it("shows the user givings", async () => {
        // expectTextToBeInTheDocument("See transaction");
        // expectTextToBeInTheDocument("5/18/2022");
        expectTextToBeInTheDocument("0.50");
        // expect(await screen.getByText("0.50")).toBeInTheDocument();
      });
    });
  });

  describe("when there is no wallet connected", () => {
    const connectWalletMock = jest.fn();

    beforeEach(() => {
      renderComponent(<GivingsSection />, {
        walletProviderValue: {
          connectWallet: connectWalletMock,
        },
      });
    });

    describe("when the give now button is clicked", () => {
      beforeEach(() => {
        clickOn("Give now");
      });

      it("calls the connect wallet request", () => {
        expect(connectWalletMock).toHaveBeenCalled();
      });
    });
  });
});
