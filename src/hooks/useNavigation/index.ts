import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export interface NavigationProps {
  pathname: string;
  search?: string;
  state?: Record<string, any>;
}

export default function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback(
    (navigationProps: NavigationProps | string) => {
      if (typeof navigationProps === "string") {
        navigate(`${navigationProps}${location.search}`, {
          state: { from: location.pathname },
        });

        return;
      }

      const { pathname, search, state = {} } = navigationProps;
      console.log(`${pathname}${search || location.search}`);
      navigate(`${pathname}${search || location.search}`, {
        state,
      });
    },
    [location],
  );

  function navigateBack() {
    navigate(-1);
  }

  const navigationObject = {
    navigateTo,
    navigateBack,
    location,
  };

  return navigationObject;
}
