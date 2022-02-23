import {
  expectImageToBeInTheDocument,
  expectTextToBeInTheDocument,
  renderComponent,
} from "config/testUtils";
import CardSideImage from ".";

describe("CardSideImage", () => {
  it("should render without error", () => {
    renderComponent(
      <CardSideImage imageUrl="" imageAlt="image" text="texto" />,
    );

    expectImageToBeInTheDocument("image");
    expectTextToBeInTheDocument("texto");
  });
});
