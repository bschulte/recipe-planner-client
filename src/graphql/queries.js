import gql from "graphql-tag";

export const GET_USER = gql`
  {
    user {
      email
      createdAt
      access {
        isAdmin
      }
    }
  }
`;

export const ADMIN_GET_USERS = gql`
  {
    users {
      id
      email
      createdAt
      access {
        isAdmin
      }
      config {
        country
      }
    }
  }
`;

export const GET_RECIPES = gql`
  {
    recipes {
      id
      url
      name
      dishType
    }
  }
`;
