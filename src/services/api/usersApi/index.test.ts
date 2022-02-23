import usersApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postCreateUser", () => {
    beforeEach(() => {
      // If it's a different method just change it to: post, put, delete, etc.
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postCreateUser("user@test.com");

      expect(api.post).toHaveBeenCalledWith("/api/v1/users", {
        email: "user@test.com",
      });
    });
  });
});
