import {
  expectImageToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import CardRoundImage from ".";

describe("CardRoundImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardRoundImage
        centerImage=""
        bottomImage=""
        rightImageAlt="rightImage"
        centerImageAlt="centerImage"
        bottomImageAlt="bottomImage"
      />,
    );

    expectImageToBeInTheDocument("centerImage");
    expectImageToBeInTheDocument("bottomImage");
  });
});
