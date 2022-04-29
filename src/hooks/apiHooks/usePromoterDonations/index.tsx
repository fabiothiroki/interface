import promoterDonationsApi from "services/apiTheGraph/promoterDonationsApi";

function usePromoterDonations() {
  async function getPromoterDonations(user: string) {
    const { data: promoterDonations } =
      await promoterDonationsApi.fetchPromoterDonations(user);

    return promoterDonations;
  }

  return {
    getPromoterDonations,
  };
}

export default usePromoterDonations;
