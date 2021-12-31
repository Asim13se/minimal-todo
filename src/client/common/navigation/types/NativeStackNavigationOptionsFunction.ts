import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type NativeStackNavigationOptionsFunction<P> = (
  props: P,
) => NativeStackNavigationOptions;
