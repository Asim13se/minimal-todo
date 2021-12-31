import React from 'react';
import TodoDueDate from '../../../components/TodoDueDate';
import {isAfter} from 'date-fns';
import {Todo} from '../../../../../shared/todo/models/Todo';

type Props = {
  todo: Todo;
};

function TodoListItemDueDate(props: Props) {
  if (!props.todo.dueDate) {
    return null;
  }
  const dueDate = new Date(props.todo.dueDate);
  const isPastDueDate = isAfter(new Date(), dueDate) && !props.todo.doneAt;
  return <TodoDueDate dueDate={dueDate} isPastDueDate={isPastDueDate} />;
}

export default TodoListItemDueDate;
