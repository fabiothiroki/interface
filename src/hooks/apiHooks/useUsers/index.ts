import usersApi from "services/api/usersApi";
import { useCurrentUser } from "contexts/currentUserContext";

function useUsers() {
  const { setCurrentUser } = useCurrentUser();

  async function createUser(email: string) {
    const { data: user } = await usersApi.postCreateUser(email);

    setCurrentUser(user);
  }

  return {
    createUser,
  };
}

export default useUsers;
