import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import WalletProvider from "../../contexts/walletContext";
import CausesPage from "../../pages/donations/CausesPage";
import CurrentUserProvider from "../../contexts/currentUserContext";
import ConfirmEmailPage from "../../pages/donations/ConfirmEmailPage";

function RoutesComponent(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <WalletProvider>
          <CurrentUserProvider>
            <HomePage />
          </CurrentUserProvider>
        </WalletProvider>
      </Route>

      <Route path="/causes" exact>
        <CurrentUserProvider>
          <CausesPage />
        </CurrentUserProvider>
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
