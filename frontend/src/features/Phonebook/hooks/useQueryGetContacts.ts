import { useQuery } from "react-query";
import { gql } from "@apollo/client";

import graphQLClient from "../../../api/graphQLClient";

const useQueryGetContacts = (query: String) => {
  return useQuery(["getContacts", query], async ({ queryKey }) => {
    const [_, query] = queryKey;
    const { data } = await graphQLClient.query({
      query: gql`
        query contacts($query: String) {
          contacts(query: $query) {
            id
            firstName
            lastName
            phoneNumber
          }
        }
      `,
      variables: { query }
    });

    return data.contacts;
  });
};

export default useQueryGetContacts;
