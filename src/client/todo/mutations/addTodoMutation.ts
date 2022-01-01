import {gql} from '@apollo/client';
import {Todo} from '../../../shared/todo/models/Todo';

export default function addTodoMutation(todo: Todo) {
  return gql`
  mutation AddTodoMutation {
    addTodo(id: "${todo.id}", title: "${todo.title}", dueDate: "${todo.dueDate}") {
      id
    }
  }
`;
}
