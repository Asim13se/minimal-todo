import {createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../../shared/common/models/User';
import GraphQLServerURI from '../../../shared/common/constants/GraphQLServerURI';

const httpLink = createHttpLink({
  uri: GraphQLServerURI,
});

const authLink = setContext(async (_, {headers}) => {
  const userStr = await AsyncStorage.getItem('user');
  if (!userStr) {
    return {headers};
  }
  const user: User = JSON.parse(userStr);
  return {
    headers: {
      ...headers,
      'user-id': user?.id,
    },
  };
});

const graphQLClientAuthLink = authLink.concat(httpLink);

export default graphQLClientAuthLink;
