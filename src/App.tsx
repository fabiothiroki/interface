import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContextProvider } from "contexts/toastContext";
import Toast from "contexts/toastContext/toastComponent";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import { useEffect } from "react";
import { growthbook } from "services/growthbook";
import RoutesComponent from "./config/routes";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import LoadingOverlayProvider from "./contexts/loadingOverlayContext";
import ModalProvider from "./contexts/modalContext";

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    // Load feature definitions from GrowthBook API
    fetch("http://localhost:3100/api/features/key_prod_4c8113b660524f90")
      .then((res) => res.json())
      .then((parsed) => {
        growthbook.setFeatures(parsed.features);
      });

    // Set user attributes for targeting (from cookie, auth system, etc.)
    growthbook.setAttributes({
      id: "123",
      company: "ribon",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GrowthBookProvider growthbook={growthbook}>
        <ThemeProvider theme={theme}>
          <LoadingOverlayProvider>
            <ModalProvider>
              <GlobalStyle />
              <BrowserRouter>
                <ToastContextProvider>
                  <RoutesComponent />
                  <Toast />
                </ToastContextProvider>
              </BrowserRouter>
            </ModalProvider>
          </LoadingOverlayProvider>
        </ThemeProvider>
      </GrowthBookProvider>
    </QueryClientProvider>
  );
}

export default App;
