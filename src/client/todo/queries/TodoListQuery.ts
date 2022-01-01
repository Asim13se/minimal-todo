import {gql} from '@apollo/client';

const TodoListQuery = gql`
  query TodoListQuery {
    todoList {
      id
      title
      dueDate
      doneAt
    }
  }
`;

export default TodoListQuery;
