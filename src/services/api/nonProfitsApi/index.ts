import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import api from "..";

const nonProfitsApi = {
  getNonProfits: (): Promise<AxiosResponse<NonProfit[]>> =>
    api.get("/api/v1/non_profits"),
};

export default nonProfitsApi;
