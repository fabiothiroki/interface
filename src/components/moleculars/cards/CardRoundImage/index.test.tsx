import {
  expectImageToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import CardRoundImage from ".";

describe("CardRoundImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardRoundImage
        logoImage=""
        bottomImage=""
        rightImageAlt="rightImage"
        logoImageAlt="logoImage"
        bottomImageAlt="bottomImage"
      />,
    );

    expectImageToBeInTheDocument("logoImage");
    expectImageToBeInTheDocument("bottomImage");
  });
});
