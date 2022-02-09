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
        logo=""
        imageAlt="image"
        logoAlt="imageLogoAlt"
      />,
    );

    expectImageToBeInTheDocument("image");
    expectImageToBeInTheDocument("logoAlt");
  });
});
