import { gql } from "graphql-request";

export const puzzleByDateQuery = gql`
  query puzzlesByDate($input: String!) {
    puzzlesByDate(date: $input) {
      data {
        _id
        _ts
        wi
        wj
        i
        j
        d
        date
        solves {
          data {
            _id
            _ts
            moveStack
            user {
              displayName
              name
              _id
            }
          }
        }
      }
    }
  }
`;

export const userByEmailQuery = gql`
  query userByEmail($input: String!) {
    userByEmail(email: $input) {
      data {
        _id
        _ts
        name
        displayName
        email
        image
        solves {
          data {
            puzzle {
              _id
              date
              wi
            }
          }
        }
      }
    }
  }
`;
