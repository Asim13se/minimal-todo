import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../common/navigation/types/MainStackParamList';
import NewTodoFloatingButton from '../../components/NewTodoFloatingButton';
import TodoListContainer from './components/TodoListContainer';
import NewTodoInputContainer from '../../components/NewTodoInput/NewTodoInputContainer';

export type TodoListPageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof TodoListPageRouteName
>;

function TodoListPage(props: TodoListPageProps) {
  return (
    <View style={styles.root}>
      <TodoListContainer navigation={props.navigation} />
      <NewTodoInputContainer />
      <NewTodoFloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const TodoListPageRouteName = 'TodoListPage';
export default TodoListPage;
