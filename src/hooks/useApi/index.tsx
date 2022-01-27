import { useQuery, UseQueryOptions } from "react-query";
import { logError } from "services/crashReport";
import { AxiosResponse } from "axios";

interface Props {
  key: string;
  fetchMethod(): Promise<AxiosResponse>;
  options?: UseQueryOptions<any, Error, any>;
}
export function useApi({ key, fetchMethod, options }: Props) {
  const { isLoading, error, data, refetch } = useQuery<any, Error>(
    key,
    async () => {
      const { data: fetchData } = await fetchMethod();
      if (error) logError(error, `An error occurred when fetching ${key}`);

      return fetchData;
    },
    options,
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
}
