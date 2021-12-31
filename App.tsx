import 'react-native-gesture-handler';
import './src/client/common/i18n/i18n';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Portal from '@burstware/react-native-portal';
import MainNavigator from './src/client/common/navigation/components/MainNavigator';

const App = () => {
  return (
    <Portal.Host>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Portal.Host>
  );
};

export default App;
