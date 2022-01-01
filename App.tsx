import 'react-native-gesture-handler';
import './src/client/common/i18n/i18n';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import Portal from '@burstware/react-native-portal';
import MainNavigator from './src/client/common/navigation/components/MainNavigator';
import graphQLClient from './src/client/common/graphQL/graphQLClient';
import initApp from './src/client/common/utils/initApp';

initApp();

const App = () => {
  return (
    <ApolloProvider client={graphQLClient}>
      <Portal.Host>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Portal.Host>
    </ApolloProvider>
  );
};

export default App;
