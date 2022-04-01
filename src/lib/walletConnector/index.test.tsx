import { connectWalletRequest, USER_REJECTED_CONNECTION_ERROR_CODE } from ".";

describe("#walletConnector", () => {
  describe("#connectWalletRequest", () => {
    describe("when there is no ethereum object", () => {
      beforeEach(() => {
        window.ethereum = null;
      });

      it("calls the #onEthereumNotFound callback", () => {
        const mockFunction = jest.fn();
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
        const mockFunction = jest.fn();
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
        const mockFunction = jest.fn();
        connectWalletRequest({ onError: mockFunction });

        expect(mockFunction).toHaveBeenCalled();
      });
    });
  });
});
