import {
  expectTextNotToBeInTheDocument,
  expectTextToBeInTheDocument,
  renderComponent,
  waitForPromises,
} from "config/testUtils";
import impactFactory from "config/testUtils/factories/impactFactory";
import { mockRequest } from "config/testUtils/test-helper";
import userFactory from "config/testUtils/factories/userFactory";
import nonProfitFactory from "config/testUtils/factories/nonProfitFactory";
import Impact from ".";

describe("Impact", () => {
  describe("when there are no tickets used", () => {
    it("should render title", () => {
      renderComponent(<Impact />);

      expectTextToBeInTheDocument("IMPACT");
    });

    it("should render cardEmptySection", () => {
      renderComponent(<Impact />);

      expectTextToBeInTheDocument("Donate now");
      expectTextToBeInTheDocument(
        "Your donation impact summary will be shown here",
      );
    });
  });

  const user = userFactory({ id: 1 });

  describe("when there are more cards to show", () => {
    beforeEach(async () => {
      renderComponent(<Impact />, {
        currentUserProviderValue: {
          currentUser: user,
        },
      });
      mockRequest(`api/v1/users/${user.id}/impacts`, {
        payload: [
          impactFactory({ nonProfit: nonProfitFactory({ id: 1 }) }),
          impactFactory({ nonProfit: nonProfitFactory({ id: 2 }) }),
          impactFactory({ nonProfit: nonProfitFactory({ id: 3 }) }),
        ],
      });
      await waitForPromises();
    });

    it("shows the show more button", async () => {
      expectTextToBeInTheDocument("Show more");
    });
  });

  describe("when there are no more cards to show", () => {
    beforeEach(async () => {
      renderComponent(<Impact />, {
        currentUserProviderValue: {
          currentUser: user,
        },
      });
      mockRequest(`api/v1/users/${user.id}/impacts`, {
        payload: [
          impactFactory({ nonProfit: nonProfitFactory({ id: 1 }) }),
          impactFactory({ nonProfit: nonProfitFactory({ id: 2 }) }),
        ],
      });
      await waitForPromises();
    });

    it("shows the show more button", async () => {
      expectTextNotToBeInTheDocument("Show more");
    });
  });
});
