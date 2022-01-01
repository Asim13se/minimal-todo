import graphQLServer from './common/graphQL/graphQLServer';

graphQLServer.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
