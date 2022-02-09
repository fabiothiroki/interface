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
        imageLogo=""
        imageAlt="image"
        imageLogoAlt="imageLogoAlt"
      />,
    );

    expectImageToBeInTheDocument("image");
    expectImageToBeInTheDocument("imageLogoAlt");
  });
});
