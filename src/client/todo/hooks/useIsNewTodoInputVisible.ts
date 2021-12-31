import {createGlobalState} from 'react-hooks-global-state';

type Return = {
  isNewTodoInputVisible: boolean;
  setIsNewTodoInputVisible: (isNewTodoInputVisible: boolean) => void;
};

const initialState = {
  isNewTodoInputVisible: false,
};
const {useGlobalState} = createGlobalState(initialState);

export default function useIsNewTodoInputVisible(): Return {
  const [isNewTodoInputVisible, setIsNewTodoInputVisible] = useGlobalState(
    'isNewTodoInputVisible',
  );

  return {
    isNewTodoInputVisible,
    setIsNewTodoInputVisible,
  };
}
