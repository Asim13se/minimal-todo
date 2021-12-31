import React from 'react';
import RoundCheckbox from '../../../../common/components/checkboxes/RoundCheckbox';
import {OnPressTodoItemCheckbox} from '../types/OnPressTodoItemCheckbox';
import {Todo} from '../../../../../shared/todo/models/Todo';

type Props = {
  todo: Todo;
  onPress: OnPressTodoItemCheckbox;
};

function TodoListItemCheckbox(props: Props) {
  const handlePress = () => {
    props.onPress(props.todo);
  };
  return (
    <RoundCheckbox
      onPress={handlePress}
      isChecked={Boolean(props.todo.doneAt)}
    />
  );
}

export default TodoListItemCheckbox;
