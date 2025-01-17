import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET}`
  }
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
