import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import User from "types/entities/User";

export interface ICurrentUserContext {
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  updateCurrentUser: (data: Partial<User>) => void;
  signedIn: boolean;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const CurrentUserContext = createContext<ICurrentUserContext>(
  {} as ICurrentUserContext,
);

function CurrentUserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [signedIn, setSignedIn] = useState(false);

  function updateCurrentUser(data: Partial<User>) {
    setCurrentUser({ ...currentUser, data } as User);
  }

  useEffect(() => {
    setSignedIn(!!currentUser);
  }, [currentUser]);

  const currentUserObject: ICurrentUserContext = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      updateCurrentUser,
      signedIn,
    }),
    [currentUser, signedIn],
  );

  return (
    <CurrentUserContext.Provider value={currentUserObject}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error("useCurrentUser must be used within CurrentUserProvider");
  }

  return context;
};
