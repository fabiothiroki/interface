import { AxiosResponse } from "axios";
import Offer from "types/entities/Offer";
import { apiGet } from "..";

const offersApi = {
  getOffers: (): Promise<AxiosResponse<Offer[]>> => apiGet("givings/offers"),
};

export default offersApi;
