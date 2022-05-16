import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import Dropdown from ".";

describe("Dropdown", () => {
  it("should render without error", () => {
    renderComponent(
      <Dropdown name="dropdown" values={["test1", "test2"]} label="dropdown" />,
    );

    expectTextToBeInTheDocument("Dropdown");
  });
});
