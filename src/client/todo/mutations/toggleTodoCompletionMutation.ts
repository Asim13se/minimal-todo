import {gql} from '@apollo/client';

export default function toggleTodoCompletionMutation(
  id: string,
  doneAt: string,
) {
  return gql`
  mutation toggleTodoCompletionMutation {
    toggleTodoCompletion(id: "${id}", doneAt: "${doneAt}")
  }
`;
}
