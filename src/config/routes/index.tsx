import React from "react";
import { Switch, Route } from "react-router-dom";
import WalletProvider from "contexts/walletContext";
import CausesPage from "pages/donations/CausesPage";
import CurrentUserProvider from "contexts/currentUserContext";
import ConfirmEmailPage from "pages/donations/ConfirmEmailPage";

function RoutesComponent(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <WalletProvider>
          <CurrentUserProvider>
            <CausesPage />
          </CurrentUserProvider>
        </WalletProvider>
      </Route>

      <Route path="/confirm-email" exact>
        <CurrentUserProvider>
          <ConfirmEmailPage />
        </CurrentUserProvider>
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
