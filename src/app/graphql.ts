import gql from 'graphql-tag';

import { Link } from './types';

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    links {
      id
      createdAt
      url
      description
    }
  }
`;

export interface AllLinksQueryResponse {
  allLinks: Link[];
  loading: boolean;
}
