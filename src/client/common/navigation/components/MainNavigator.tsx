import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/MainStackParamList';
import TodoListPage, {
  TodoListPageRouteName,
} from '../../../todo/pages/TodoListPage/TodoListPage';
import TodoListPageRouteOptions from '../../../todo/pages/TodoListPage/TodoListPageRouteOptions';
import TodoPage, {
  TodoPageRouteName,
} from '../../../todo/pages/TodoPage/TodoPage';
import TodoPageRouteOptions from '../../../todo/pages/TodoPage/TodoPageRouteOptions';
import MainNavigatorScreenOptions from '../options/MainNavigatorScreenOptions';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={TodoListPageRouteName}
      screenOptions={MainNavigatorScreenOptions}>
      <Stack.Screen
        name={TodoListPageRouteName}
        component={TodoListPage}
        options={TodoListPageRouteOptions}
      />
      <Stack.Screen
        name={TodoPageRouteName}
        component={TodoPage}
        options={TodoPageRouteOptions}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
