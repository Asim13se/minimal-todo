import {act, renderHook} from '@testing-library/react-hooks';
import useTodoList from '../../hooks/useTodoList';
import {Todo} from '../../../../shared/todo/models/Todo';

it('initial state', () => {
  const {result} = renderHook(() => useTodoList());
  expect(result.current.todoList).toStrictEqual([]);
});
it('setTodoList() to set todoList', () => {
  const {result} = renderHook(() => useTodoList());
  const todo: Todo = {
    id: 'todo_id_1',
    title: 'Todo 1',
  };
  act(() => {
    result.current.setTodoList([todo]);
  });
  expect(result.current.todoList).toStrictEqual([todo]);
});
