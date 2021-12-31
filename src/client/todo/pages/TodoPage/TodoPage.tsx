import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../common/navigation/types/MainStackParamList';
import TodoDetails from './components/TodoDetails';

export type TodoPageProps = {} & NativeStackScreenProps<
  MainStackParamList,
  typeof TodoPageRouteName
>;

function TodoPage(props: TodoPageProps) {
  return (
    <View style={styles.root}>
      <TodoDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const TodoPageRouteName = 'TodoPage';
export default TodoPage;
