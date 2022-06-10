import { renderHook } from "@testing-library/react-hooks";
import usersApi from "services/api/usersApi";
import useUsers from ".";

describe("useUsers", () => {
  let hook: ReturnType<typeof useUsers>;
  const testEmail = "test@email.com";
  const data = { name: "test user" };

  describe("#findUser", () => {
    beforeEach(() => {
      const { result } = renderHook(() => useUsers());
      hook = result.current;
      usersApi.postSearchUser = jest.fn(() => ({ data } as any));
    });

    it("calls the usersApi searchUser with correct params", () => {
      hook.findUser(testEmail);

      expect(usersApi.postSearchUser).toHaveBeenCalledWith(testEmail);
    });

    it("returns the data fetched from the api", async () => {
      const findResultResult = await hook.findUser(testEmail);
      expect(findResultResult).toEqual(data);
    });
  });
});
