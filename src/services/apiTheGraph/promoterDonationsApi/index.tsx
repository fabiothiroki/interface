import { gql, ApolloQueryResult } from "@apollo/client";
import { client } from "..";

export const queryPromoter = `
  query ($user: Bytes!) {
    promoterDonations (where: { user: $user } orderBy: timestamp, orderDirection: desc first:3){
  	    id 
		user
		amountDonated
		timestamp
    }
  }
`;

const promoterDonationsApi = {
  fetchPromoterDonations: (user: string): Promise<ApolloQueryResult<any>> =>
    client.query({
      query: gql(queryPromoter),
      variables: {
        user,
      },
    }),
};

export default promoterDonationsApi;
