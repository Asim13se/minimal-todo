import {gql} from '@apollo/client';
import {Todo} from '../../../shared/todo/models/Todo';

export default function addTodoMutation(todo: Todo) {
  return gql`
  mutation UpdateTodoMutation {
    updateTodo(id: "${todo.id}", title: "${todo.title}", dueDate: "${todo.dueDate}") {
      id
    }
  }
`;
}
