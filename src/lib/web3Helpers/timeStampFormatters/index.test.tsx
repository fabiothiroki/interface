import { formatDate } from "./index";

describe("#formatFromTimestamp", () => {
  it("formats a timestamp to date", () => {
    expect(formatDate(1651061500)).toEqual("27/04/2022");
  });
});
