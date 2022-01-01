import {ApolloServer} from 'apollo-server';
import level from 'level';
import graphQLSchema from './graphQLSchema';
import graphQLResolvers from './graphQLResolvers';

const db = level('./databases/my-db');

const graphQLServer = new ApolloServer({
  typeDefs: graphQLSchema,
  resolvers: graphQLResolvers,
  context: ({req}) => {
    const userId = req.headers['user-id'] || '';
    return {userId, db};
  },
});

export default graphQLServer;
