import {
  expectImageToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import CardRoundImage from ".";

describe("CardRoundImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardRoundImage
        rightImage=""
        leftImage=""
        centerImage=""
        bottomImage=""
        rightImageAlt="rightImage"
        leftImageAlt="leftImage"
        centerImageAlt="centerImage"
        bottomImageAlt="bottomImage"
      />,
    );

    expectImageToBeInTheDocument("rightImage");
    expectImageToBeInTheDocument("leftImage");
    expectImageToBeInTheDocument("centerImage");
    expectImageToBeInTheDocument("bottomImage");
  });
});
