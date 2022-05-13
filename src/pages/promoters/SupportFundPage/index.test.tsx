import {
  expectLogEventToHaveBeenCalledWith,
  clickOn,
  expectTextToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import FundPage from ".";

describe("FundPage", () => {
  it("should render without error", () => {
    renderComponent(<FundPage />);

    expectTextToBeInTheDocument("Support the Fund");
  });

  it("logs the fundSupportScreen_view event", () => {
    renderComponent(<FundPage />);

    expectLogEventToHaveBeenCalledWith("fundSupportScreen_view");
  });

  describe("when the option toggle has changed", () => {
    it("logs the fundSupportGivingTogBtn_click event", () => {
      renderComponent(<FundPage />);
      clickOn("Cryptocurrency");

      expectLogEventToHaveBeenCalledWith("fundSupportGivingTogBtn_click", {
        option: "cryptocurrency",
      });
    });

    it("should render card form", () => {
      renderComponent(<FundPage />);

      expectTextToBeInTheDocument("Choose your giving");
      expectTextToBeInTheDocument("Next");
    });

    it("should render cryptocurrency form", () => {
      renderComponent(<FundPage />);
      clickOn("Cryptocurrency");

      expectTextToBeInTheDocument("How much do you want to give?");
      expectTextToBeInTheDocument("Enter any USDC amount");
    });
  });
});
