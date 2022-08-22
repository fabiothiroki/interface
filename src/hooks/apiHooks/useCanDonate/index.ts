import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import { CanDonate } from "types/apiResponses/CanDonate";

function useCanDonate(integrationId: number) {
  const {
    data: canDonate,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => usersApi.postCanDonate(integrationId),
  });

  return { canDonate, isLoading, refetch };
}

export default useCanDonate;
