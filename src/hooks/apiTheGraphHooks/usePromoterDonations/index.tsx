import promoterDonationsApi from "services/apiTheGraph/promoterDonationsApi";

function usePromoterDonations() {
  async function getPromoterDonations(user: string, maxQuantity: number) {
    const { data: promoterDonations } =
      await promoterDonationsApi.fetchPromoterDonations(user, maxQuantity);
    console.log("final", promoterDonations);
    return promoterDonations;
  }
  return { getPromoterDonations };
}

export default usePromoterDonations;
