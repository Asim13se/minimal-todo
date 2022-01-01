import {ApolloClient, InMemoryCache} from '@apollo/client';
import GraphQLServerURI from '../../../shared/common/constants/GraphQLServerURI';
import graphQLClientAuthLink from './graphQLClientAuthLink';

const graphQLClient = new ApolloClient({
  uri: GraphQLServerURI,
  link: graphQLClientAuthLink,
  cache: new InMemoryCache(),
});

export default graphQLClient;
