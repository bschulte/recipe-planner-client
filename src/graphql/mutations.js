import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($userData: UserInput!) {
    login(userData: $userData)
  }
`;
