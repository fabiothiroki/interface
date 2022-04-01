import { expectLogErrorToHaveBeenCalled } from "config/testUtils";
import {
  checkConnectionRequest,
  connectWalletRequest,
  USER_REJECTED_CONNECTION_ERROR_CODE,
} from ".";

describe("#walletConnector", () => {
  describe("#connectWalletRequest", () => {
    const mockFunction = jest.fn();

    describe("when there is an ethereum object", () => {
      beforeEach(() => {
        window.ethereum = {
          request: mockFunction,
        };
      });
      it("calls the ethereum.request method with right params", () => {
        connectWalletRequest({});

        expect(mockFunction).toHaveBeenCalledWith({
          method: "eth_requestAccounts",
        });
      });
    });

    describe("when there is no ethereum object", () => {
      beforeEach(() => {
        window.ethereum = null;
      });

      it("calls the #onEthereumNotFound callback", () => {
        connectWalletRequest({ onEthereumNotFound: mockFunction });

        expect(mockFunction).toHaveBeenCalled();
      });
    });

    describe("when the user rejects the connection", () => {
      beforeEach(() => {
        window.ethereum = {
          request: () => {
            const error = new Error() as any;
            error.code = USER_REJECTED_CONNECTION_ERROR_CODE;
            throw error;
          },
        };
      });

      it("calls the #onEthereumNotFound callback", () => {
        connectWalletRequest({ onUserRejectedConnection: mockFunction });

        expect(mockFunction).toHaveBeenCalled();
      });
    });

    describe("when an error occurs", () => {
      beforeEach(() => {
        window.ethereum = {
          request: () => {
            throw new Error();
          },
        };
      });

      it("calls the #onEthereumNotFound callback", () => {
        connectWalletRequest({ onError: mockFunction });

        expect(mockFunction).toHaveBeenCalled();
      });
    });
  });

  describe("checkConnectionRequest", () => {
    const mockFunction = jest.fn();
    const firstAccountAddress = "0x001";

    describe("when there are accounts", () => {
      beforeEach(() => {
        window.ethereum.request = mockFunction.mockReturnValue([
          firstAccountAddress,
        ]);
      });

      it("calls the ethereum.request method with right params", () => {
        checkConnectionRequest();

        expect(mockFunction).toHaveBeenCalledWith({ method: "eth_accounts" });
      });

      it("returns the first account", async () => {
        const result = await checkConnectionRequest();

        expect(result).toEqual(firstAccountAddress);
      });
    });

    describe("when there are no accounts", () => {
      beforeEach(() => {
        window.ethereum.request = mockFunction.mockReturnValue(null);
      });

      it("returns null", async () => {
        const result = await checkConnectionRequest();

        expect(result).toBeNull();
      });
    });

    describe("when an error occurs with the request", () => {
      beforeEach(() => {
        window.ethereum.request = () => {
          throw new Error();
        };
      });

      xit("returns null", async () => {
        await checkConnectionRequest();

        expectLogErrorToHaveBeenCalled();
      });
    });
  });
});
