import { gql } from 'apollo-angular';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        name
        id
        image
        status
        gender
      }
    }
  }
`;

export { GET_CHARACTERS };
