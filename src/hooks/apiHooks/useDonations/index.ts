import donationsApi from "services/api/donationsApi";
import { logError } from "services/crashReport";

function useDonations() {
  async function donate(integrationId: number, nonProfitId: number) {
    try {
      await donationsApi.postDonation(integrationId, nonProfitId);
    } catch (e) {
      logError(e);
    }
  }

  return {
    donate,
  };
}

export default useDonations;
