import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import ButtonSwitch from ".";

describe("ButtonSwitch", () => {
  it("should render without error", () => {
    renderComponent(<ButtonSwitch leftText="PT" rightText="EN" />);

    expectTextToBeInTheDocument("PT");
  });
});
