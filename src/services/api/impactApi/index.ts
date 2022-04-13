import { AxiosResponse } from "axios";
import Impact from "types/entities/Impact";
import { apiGet } from "..";

const impactApi = {
  getImpact: (id: number | null): Promise<AxiosResponse<Impact[]>> =>
    apiGet(`users/${id}/impacts`),
};

export default impactApi;
