import graphQLServer from './graphQL/graphQLServer';

graphQLServer.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
