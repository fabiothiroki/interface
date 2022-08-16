import { useApi } from "hooks/useApi";
import { Currencies } from "types/enums/Currencies";
import nonProfitImpactApi from "services/api/nonProfitImpactApi";
import NonProfitImpact from "types/apiResponses/NonProfitImpact";

function useNonProfitImpact(
  nonProfitId: number,
  value: number,
  currency: Currencies,
) {
  const {
    data: nonProfits,
    isLoading,
    refetch,
  } = useApi<NonProfitImpact>({
    key: `nonProfitImpact${nonProfitId}`,
    fetchMethod: () =>
      nonProfitImpactApi.postImpactByNonProfit(nonProfitId, value, currency),
    options: {
      enabled: !!nonProfitId,
    },
  });

  return { nonProfits, isLoading, refetch };
}

export default useNonProfitImpact;
