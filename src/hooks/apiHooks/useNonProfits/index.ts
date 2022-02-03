import { useApi } from "hooks/useApi";
import nonProfitsApi from "services/api/nonProfitsApi";
import NonProfit from "types/entities/NonProfit";

function useNonProfits() {
  const {
    data: nonProfits,
    isLoading,
    refetch,
  } = useApi<NonProfit[]>({
    key: "nonProfits",
    fetchMethod: nonProfitsApi.getNonProfits,
  });

  return { nonProfits, isLoading, refetch };
}

export default useNonProfits;
