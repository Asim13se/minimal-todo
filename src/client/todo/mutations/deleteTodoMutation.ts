import {gql} from '@apollo/client';

export default function deleteTodoMutation(todoId: string) {
  return gql`
  mutation DeleteTodoMutation {
    deleteTodo(id: "${todoId}")
  }
`;
}
