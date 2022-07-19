import { AxiosResponse } from "axios";
import { apiPost } from "..";

const sourcesApi = {
  postCreateSource: (userId: string, integrationId: string): Promise<AxiosResponse<any>> =>
    apiPost("sources", { userId, integrationId }),
};

export default sourcesApi;
