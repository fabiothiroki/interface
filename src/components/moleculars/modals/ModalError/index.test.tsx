import { clickOn, renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ModalError from ".";

describe("ModalError", () => {
  it("should render without error", () => {
    renderComponent(<ModalError title="ModalError" visible />);

    expectTextToBeInTheDocument("ModalError");
  });

  describe("when it receives a function", () => {
    it("should execute it", () => {
      const mockFunction = jest.fn();
      renderComponent(
        <ModalError
          title="ModalError"
          onClose={mockFunction}
          buttonText="button"
          visible
        />,
      );
      clickOn("button");

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
