// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "jest-canvas-mock";

export const mockNavigationFunction = jest.fn();
jest.mock("hooks/useNavigation", () => ({
  __esModule: true,
  default: () => ({
    navigateTo: mockNavigationFunction,
  }),
}));
