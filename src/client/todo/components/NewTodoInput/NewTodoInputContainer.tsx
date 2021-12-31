import React from 'react';
import NewTodoInput from './NewTodoInput';
import useIsNewTodoInputVisible from '../../hooks/useIsNewTodoInputVisible';

type Props = {};

function NewTodoInputContainer(props: Props) {
  const {isNewTodoInputVisible} = useIsNewTodoInputVisible();
  return <NewTodoInput isVisible={isNewTodoInputVisible} />;
}

export default NewTodoInputContainer;
