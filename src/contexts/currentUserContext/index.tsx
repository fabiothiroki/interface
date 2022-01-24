import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import User from "types/User";

export interface ICurrentUserContext {
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  updateCurrentUser: (data: Partial<User>) => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const CurrentUserContext = createContext<ICurrentUserContext>(
  {} as ICurrentUserContext,
);

function CurrentUserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();

  function updateCurrentUser(data: Partial<User>) {
    setCurrentUser({ ...currentUser, data } as User);
  }

  const currentUserObject: ICurrentUserContext = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      updateCurrentUser,
    }),
    [currentUser],
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
