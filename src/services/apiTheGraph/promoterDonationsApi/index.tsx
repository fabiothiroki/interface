import { gql, ApolloQueryResult } from "@apollo/client";
import { client } from "..";

export const PROMOTER_DONATIONS_QUERY_NAME = "PROMOTER_DONATIONS_QUERY";

export const QUERY_PROMOTER_ID = gql`
  query ${PROMOTER_DONATIONS_QUERY_NAME}($user: Bytes!, $first: Int) {
    promoterDonations(
      where: { user: $user }
      orderBy: timestamp
      orderDirection: desc
      first: $first
    ) {
      id
      user
      amountDonated
      timestamp
    }
  }
`;

export const QUERY_ALL_PROMOTERS = gql`
  query ${PROMOTER_DONATIONS_QUERY_NAME}($first: Int) {
    promoterDonations(
      orderBy: timestamp
      orderDirection: desc
      first: $first
    ) {
      id
      user
      amountDonated
      timestamp
    }
  }
`;

export const promoterDonationsApi = {
  fetchPromoterDonations: (
    user: string,
    first: number,
  ): Promise<ApolloQueryResult<any>> =>
    client.query({
      query: QUERY_PROMOTER_ID,
      variables: {
        user,
        first,
      },
      fetchPolicy: "no-cache",
    }),

  fetchAllPromotersDonations: (
    first: number,
  ): Promise<ApolloQueryResult<any>> =>
    client.query({
      query: QUERY_ALL_PROMOTERS,
      variables: {
        first,
      },
      fetchPolicy: "no-cache",
    }),
};

export default promoterDonationsApi;
