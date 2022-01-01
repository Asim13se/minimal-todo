import AsyncStorage from '@react-native-async-storage/async-storage';
import signUpAnonymousUser from '../auth/signUpAnonymousUser';

export default async function initApp() {
  const user = await AsyncStorage.getItem('user');
  if (!user) {
    await signUpAnonymousUser();
  }
}
