import React from 'react';
import {View, FlatList} from 'react-native';
import {Todo} from '../../../../../shared/todo/models/Todo';
import TodoListItem from './TodoListItem';
import TodoListEmptyComponent from './TodoListEmptyComponent';

type Props = {
  todoList: Todo[];
};

function TodoList(props: Props) {
  const renderItem = ({item}: {item: Todo}) => {
    return <TodoListItem item={item} />;
  };
  return (
    <View>
      <FlatList
        data={props.todoList}
        renderItem={renderItem}
        ListEmptyComponent={<TodoListEmptyComponent />}
      />
    </View>
  );
}

export default TodoList;
