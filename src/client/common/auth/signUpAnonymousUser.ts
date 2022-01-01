import UUID from 'pure-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import graphQLClient from '../graphQL/graphQLClient';
import {User} from '../../../shared/common/models/User';
import getSignUpAnonymousUserMutation from '../mutations/getSignUpAnonymousUserMutation';

export default async function signUpAnonymousUser() {
  const id = new UUID(4).toString();
  await graphQLClient.mutate({
    mutation: getSignUpAnonymousUserMutation(id),
  });
  const user: User = {
    id,
    authType: 'anonymous',
  };
  await AsyncStorage.setItem('user', JSON.stringify(user));
}
