import {createGlobalState} from 'react-hooks-global-state';
import {Todo} from '../../../shared/todo/models/Todo';

type Return = {
  todoList: Todo[];
  setTodoList: (todoList: Todo[]) => void;
};

const initialState: {todoList: Todo[]} = {
  todoList: [],
};
const {useGlobalState} = createGlobalState(initialState);

export default function useTodoList(): Return {
  const [todoList, setTodoList] = useGlobalState('todoList');

  return {
    todoList,
    setTodoList,
  };
}
