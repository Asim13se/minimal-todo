import React from 'react';
import TodoList from './TodoList';
import {Todo} from '../../../../../shared/todo/models/Todo';
import {OnPressTodoItem} from '../types/OnPressTodoItem';
import {TodoListPageProps} from '../TodoListPage';
import {TodoPageRouteName} from '../../TodoPage/TodoPage';
import {OnPressTodoItemCheckbox} from '../types/OnPressTodoItemCheckbox';

type Props = {
  navigation: TodoListPageProps['navigation'];
};

//const todoList: Todo[] = [];
const todoList: Todo[] = [
  {
    id: 'todo_1',
    title: 'Todo 1',
    doneAt: '2021-12-29T20:40:00.000Z',
    dueDate: '2021-12-26T16:30:00.000Z',
  },
  {
    id: 'todo_2',
    title: 'Todo 2',
    dueDate: '2021-12-31T22:40:00.000Z',
  },
];

function TodoListContainer(props: Props) {
  const handlePressItem: OnPressTodoItem = todo => {
    props.navigation.navigate(TodoPageRouteName, {
      id: todo.id,
    });
  };
  const handlePressItemCheckbox: OnPressTodoItemCheckbox = todo => {};
  return (
    <TodoList
      todoList={todoList}
      onPressItem={handlePressItem}
      onPressItemCheckbox={handlePressItemCheckbox}
    />
  );
}

export default TodoListContainer;
