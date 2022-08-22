import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import { CanDonate } from "types/apiResponses/CanDonate";
import { emptyRequest } from "services/api";

function useCanDonate(integrationId: number | null) {
  const {
    data: canDonate,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => {
      if (integrationId) return usersApi.postCanDonate(integrationId);

      return emptyRequest();
    },
    options: {
      enabled: !!integrationId,
    },
  });

  return { canDonate: canDonate?.canDonate || true, isLoading, refetch };
}

export default useCanDonate;
