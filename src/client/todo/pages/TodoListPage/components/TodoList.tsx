import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Todo} from '../../../../../shared/todo/models/Todo';
import TodoListItem from './TodoListItem';
import TodoListEmptyComponent from './TodoListEmptyComponent';
import {OnPressTodoItem} from '../types/OnPressTodoItem';
import {OnPressTodoItemCheckbox} from '../types/OnPressTodoItemCheckbox';

type Props = {
  todoList: Todo[];
  onPressItem: OnPressTodoItem;
  onPressItemCheckbox: OnPressTodoItemCheckbox;
};

function TodoList(props: Props) {
  const renderItem = ({item}: {item: Todo}) => {
    return (
      <TodoListItem
        onPress={props.onPressItem}
        onPressCheckbox={props.onPressItemCheckbox}
        item={item}
      />
    );
  };
  return (
    <FlatList
      data={props.todoList}
      renderItem={renderItem}
      ListEmptyComponent={<TodoListEmptyComponent />}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 15,
    paddingBottom: 50,
  },
});

export default TodoList;
