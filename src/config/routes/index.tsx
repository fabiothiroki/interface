import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import WalletProvider from "contexts/walletContext";
import CausesPage from "pages/donations/CausesPage";
import CurrentUserProvider from "contexts/currentUserContext";
import ConfirmEmailPage from "pages/donations/ConfirmEmailPage";
import DonationDonePage from "pages/donations/DonationDonePage";
import ImpactPage from "pages/users/ImpactPage";
import MainLayout from "layouts/MainLayout";
import TreasurePage from "pages/promoters/TreasurePage";
import SupportTreasurePage from "pages/promoters/SupportTreasurePage";
import BillingInformationPage from "pages/promoters/SupportTreasurePage/CardSection/BillingInformationPage";
import PaymentInformationPage from "pages/promoters/SupportTreasurePage/CardSection/PaymentInformationPage";
import GivingsPage from "pages/promoters/GivingsPage";
import WalletLayout from "layouts/WalletLayout";
import CardPaymentInformationProvider from "contexts/cardPaymentInformationContext";
import NetworkProvider from "contexts/networkContext";
import Navigation from "./Navigation";

function RoutesComponent(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <Suspense fallback={<div />}>
          <WalletProvider>
            <CurrentUserProvider>
              <MainLayout>
                <CausesPage />
              </MainLayout>
            </CurrentUserProvider>
          </WalletProvider>
        </Suspense>
      </Route>

      <Route path="/confirm-email" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <Navigation />
            <ConfirmEmailPage />
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/donation-done" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <DonationDonePage />
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/impact" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <MainLayout>
              <ImpactPage />
            </MainLayout>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/promoters/treasure" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <NetworkProvider>
              <WalletProvider>
                <WalletLayout hasBackButton hideNavigation hideWallet>
                  <TreasurePage />
                </WalletLayout>
              </WalletProvider>
            </NetworkProvider>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/promoters/support-treasure" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <NetworkProvider>
              <WalletProvider>
                <WalletLayout>
                  <CardPaymentInformationProvider>
                    <SupportTreasurePage />
                  </CardPaymentInformationProvider>
                </WalletLayout>
              </WalletProvider>
            </NetworkProvider>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/promoters/support-treasure/billing-information" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <WalletProvider>
              <WalletLayout hasBackButton>
                <CardPaymentInformationProvider>
                  <BillingInformationPage />
                </CardPaymentInformationProvider>
              </WalletLayout>
            </WalletProvider>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/promoters/support-treasure/payment-information" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <WalletProvider>
              <WalletLayout hasBackButton>
                <CardPaymentInformationProvider>
                  <PaymentInformationPage />
                </CardPaymentInformationProvider>
              </WalletLayout>
            </WalletProvider>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/promoters/show-givings" exact>
        <Suspense fallback={<div />}>
          <CurrentUserProvider>
            <WalletProvider>
              <WalletLayout hasBackButton>
                <GivingsPage />
              </WalletLayout>
            </WalletProvider>
          </CurrentUserProvider>
        </Suspense>
      </Route>

      <Route path="/treasure" exact>
        <MainLayout>
          <div />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default RoutesComponent;
