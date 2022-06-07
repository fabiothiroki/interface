import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import InputAutoComplete from ".";

describe("InputAutoComplete", () => {
  it("should render without error", () => {
    renderComponent(<InputAutoComplete suggestions={[]} />);

    expectTextToBeInTheDocument("InputAutoComplete");
  });
});
