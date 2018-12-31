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

export const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(
      data: {
        description: $description,
        url: $url,
      }
    ) {
      id
      createdAt
      url
      description
    }
  }
`;

export interface CreateLinkMutationResponse {
  createdLink: Link;
  loading: boolean;
}
