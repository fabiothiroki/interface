import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import WalletProvider from "../../contexts/walletContext";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WalletProvider>
            <HomePage />
          </WalletProvider>
        }
      />
    </Routes>
  );
}

export default RoutesComponent;
