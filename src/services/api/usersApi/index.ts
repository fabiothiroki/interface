import { AxiosResponse } from "axios";
import User from "types/entities/User";
import { apiPost } from "..";

const usersApi = {
  postCreateUser: (email: string): Promise<AxiosResponse<User>> =>
    apiPost("users", { email }),
};

export default usersApi;
