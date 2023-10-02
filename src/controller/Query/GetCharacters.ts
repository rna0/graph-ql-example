import {gql} from "../../__generated__";

export const GET_CHARACTERS = gql(`
query GetCharacters{
  characters {
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
    }
  }
}
`);