import { act, render, RenderResult } from "@testing-library/react";
import React, { ComponentType } from "react";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n-test";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import WalletProvider, {
  IWalletContext,
  WalletContext,
} from "contexts/walletContext";

interface Options {
  [key: string]: any;
}

interface WrapperProps {
  children: JSX.Element;
}

interface RenderWithRouterResult {
  component: RenderResult;
  history: MemoryHistory;
}

export function renderWithRouter(
  children: JSX.Element,
  history = createMemoryHistory(),
  reduxOptions = {
    initialState: {
      user: userFactory(),
    },
  },
): RenderWithRouterResult {
  return {
    component: renderWithRedux(
      <Router history={history}>{children}</Router>,
      reduxOptions,
    ),
    history,
  };
}

export function renderWithI18n(
  children: JSX.Element,
  history = createMemoryHistory(),
  reduxOptions = {
    initialState: {
      user: userFactory(),
    },
  },
): RenderWithRouterResult {
  return {
    component: renderWithRedux(
      <I18nextProvider i18n={i18n}>
        <Router history={history}>{children}</Router>,
      </I18nextProvider>,
      reduxOptions,
    ),
    history,
  };
}

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

interface RenderWithContextResult {
  component: JSX.Element;
  history: MemoryHistory;
  value?: IWalletContext;
}

export async function waitForPromises() {
  await act(() => new Promise((resolve) => setImmediate(resolve)));
}

function renderProvider(
  RProvider: any,
  RContext: React.Context<any>,
  value: Record<any, any>,
  children: JSX.Element,
) {
  return (
    <RProvider>
      <RContext.Consumer>
        {(val: Record<any, any>) => (
          <RContext.Provider
            value={{
              ...val,
              ...value,
            }}
          >
            {children}
          </RContext.Provider>
        )}
      </RContext.Consumer>
    </RProvider>
  );
}

export type RenderComponentProps = {
  history?: MemoryHistory;
  reduxOptions?: Record<any, any>;
  walletProviderValue?: Partial<IWalletContext>;
};
export function renderComponent(
  component: JSX.Element,
  {
    history = createMemoryHistory(),
    reduxOptions = {},
    walletProviderValue = {},
  }: RenderComponentProps = {},
): RenderWithContextResult {
  const queryClient = new QueryClient();

  return {
    component: (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Router history={history}>
              {renderProvider(
                WalletProvider,
                WalletContext,
                walletProviderValue,
                component,
              )}
            </Router>
          </I18nextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    ),
  };
}
