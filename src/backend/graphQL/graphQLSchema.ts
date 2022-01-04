const {gql} = require('apollo-server');

const graphQLSchema = gql`
  enum AuthType {
    anonymous
    email
    phoneNumber
  }
  type User {
    id: ID!
    authType: AuthType!
  }
  type Todo {
    id: String!
    title: String!
    dueDate: String
    doneAt: String
  }
  type Query {
    todoList: [Todo]
  }
  type Mutation {
    signUpAnonymousUser(id: String!): User
    addTodo(id: String!, title: String!, dueDate: String): Todo
    updateTodo(id: String!, title: String, dueDate: String): Todo
    toggleTodoCompletion(id: String!, doneAt: String!): Boolean
    deleteTodo(id: String!): Boolean
  }
`;

export default graphQLSchema;
