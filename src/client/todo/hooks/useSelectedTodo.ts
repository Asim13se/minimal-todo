import {createGlobalState} from 'react-hooks-global-state';
import {Todo} from '../../../shared/todo/models/Todo';

type SelectedTodo = Todo | null;
type Return = {
  selectedTodo: SelectedTodo;
  setSelectedTodo: (selectedTodo: SelectedTodo) => void;
};

const initialState: {selectedTodo: SelectedTodo} = {
  selectedTodo: null,
};
const {useGlobalState} = createGlobalState(initialState);

export default function useSelectedTodo(): Return {
  const [selectedTodo, setSelectedTodo] = useGlobalState('selectedTodo');

  return {
    selectedTodo,
    setSelectedTodo,
  };
}
