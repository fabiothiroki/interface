import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import WalletProvider from "../../contexts/walletContext";
import CausesPage from "../../pages/donations/CausesPage";
import CurrentUserProvider from "../../contexts/currentUserContext";
import ConfirmEmailPage from "../../pages/donations/ConfirmEmailPage";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WalletProvider>
            <CurrentUserProvider>
              <HomePage />
            </CurrentUserProvider>
          </WalletProvider>
        }
      />
      <Route
        path="causes"
        element={
          <CurrentUserProvider>
            <CausesPage />
          </CurrentUserProvider>
        }
      />
      <Route
        path="confirm-email"
        element={
          <CurrentUserProvider>
            <ConfirmEmailPage />
          </CurrentUserProvider>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
