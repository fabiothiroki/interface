import { renderHook } from "@testing-library/react-hooks";
import useBreakpoint from ".";

const MOBILE_SIZE = 500;
const PAD_SIZE = 700;
const DESKTOP_SIZE = 1200;

describe("useBreakpoint", () => {
  describe("when the screen is on mobile size", () => {
    beforeEach(() => {
      Object.assign(global, { innerWidth: MOBILE_SIZE });
    });

    it("returns isMobile true", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isMobile).toBeTruthy();
    });

    it("returns isPad false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isPad).toBeFalsy();
    });

    it("returns isDesktop false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isDesktop).toBeFalsy();
    });
  });

  describe("when the screen is on pad size", () => {
    beforeEach(() => {
      Object.assign(global, { innerWidth: PAD_SIZE });
    });

    it("returns isMobile false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isMobile).toBeFalsy();
    });

    it("returns isPad true", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isPad).toBeTruthy();
    });

    it("returns isDesktop false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isDesktop).toBeFalsy();
    });
  });

  describe("when the screen is on desktop size", () => {
    beforeEach(() => {
      Object.assign(global, { innerWidth: DESKTOP_SIZE });
    });

    it("returns isMobile false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isMobile).toBeFalsy();
    });

    it("returns isPad false", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isPad).toBeFalsy();
    });

    it("returns isDesktop true", () => {
      const { result } = renderHook(() => useBreakpoint());

      expect(result.current.isDesktop).toBeTruthy();
    });
  });
});
