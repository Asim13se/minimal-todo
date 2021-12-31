import {NativeStackNavigationOptions} from '@react-navigation/native-stack/src/types';
import Colors from '../../styling/Colors';
import PrimaryFontFamily from '../../styling/PrimaryFontFamily';

const MainNavigatorScreenOptions: NativeStackNavigationOptions = {
  headerTintColor: Colors.primary,
  headerTitleStyle: {
    fontWeight: '600',
    fontFamily: PrimaryFontFamily,
    color: Colors.text1,
  },
  contentStyle: {
    backgroundColor: Colors.screenBackgroundColor,
  },
};

export default MainNavigatorScreenOptions;
