import React from 'react';
import TodoList from './TodoList';
import {Todo} from '../../../../../shared/todo/models/Todo';

type Props = {};

const todoList: Todo[] = [];
// const todoList: Todo[] = [
//   {
//     id: 'todo_1',
//     title: 'Todo 1',
//   },
//   {
//     id: 'todo_2',
//     title: 'Todo 2',
//   },
// ];

function TodoListContainer(props: Props) {
  return <TodoList todoList={todoList} />;
}

export default TodoListContainer;
