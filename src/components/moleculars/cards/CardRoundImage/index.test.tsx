import {
  expectImageToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import CardRoundImage from ".";

describe("CardRoundImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardRoundImage
        image=""
        bottomImage=""
        imageAlt="logoImage"
        bottomImageAlt="bottomImage"
      />,
    );

    expectImageToBeInTheDocument("image");
    expectImageToBeInTheDocument("bottomImage");
  });
});
