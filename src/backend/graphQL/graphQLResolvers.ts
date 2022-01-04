import {Todo} from '../../../shared/todo/models/Todo';
import {User} from '../../../shared/common/models/User';
import {UserDB} from '../models/UserDB';
import getUserFromDB from '../utils/getUserFromDB';
import saveUserToDB from '../utils/saveUserToDB';

type GraphQLContext = any;
type GraphQLParent = any;

const graphQLResolvers = {
  Query: {
    todoList: async (_: GraphQLParent, args: {}, context: GraphQLContext) => {
      if (!context.userId) {
        return [];
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      return userDB.todoList || [];
    },
  },
  Mutation: {
    signUpAnonymousUser: async (
      _: GraphQLParent,
      {id}: {id: string},
      context: GraphQLContext,
    ) => {
      const user: User = {
        id,
        authType: 'anonymous',
      };
      const userDB: UserDB = {
        ...user,
        todoList: [],
      };
      await saveUserToDB(userDB, context.db);
      return user;
    },
    addTodo: async (
      _: GraphQLParent,
      args: {id: string; title: string; dueDate?: string},
      context: GraphQLContext,
    ) => {
      if (!context.userId) {
        return null;
      }
      const todo: Todo = {
        id: args.id,
        title: args.title,
        dueDate: args.dueDate,
      };
      const userDB = await getUserFromDB(context.userId, context.db);
      userDB.todoList.push(todo);
      await saveUserToDB(userDB, context.db);
      return todo;
    },
    updateTodo: async (
      _: GraphQLParent,
      args: {id: string; title?: string; dueDate?: string},
      context: GraphQLContext,
    ) => {
      if (!context.userId) {
        return null;
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      const modifiedTodoIndex = userDB.todoList.findIndex(
        todo => todo.id === args.id,
      );
      if (modifiedTodoIndex === -1) {
        return null;
      }
      const modifiedTodo = {...userDB.todoList[modifiedTodoIndex]};
      if (args.title && modifiedTodo.title !== args.title) {
        modifiedTodo.title = args.title;
      }
      if (modifiedTodo.dueDate !== args.dueDate) {
        modifiedTodo.dueDate = args.dueDate;
      }
      userDB.todoList.splice(modifiedTodoIndex, 1, modifiedTodo);
      await saveUserToDB(userDB, context.db);
      return modifiedTodo;
    },
    toggleTodoCompletion: async (
      _: GraphQLParent,
      args: {id: string; doneAt: string},
      context: GraphQLContext,
    ) => {
      if (!context.userId) {
        return null;
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      const todoIndex = userDB.todoList.findIndex(item => item.id === args.id);
      if (todoIndex === -1) {
        return false;
      }
      userDB.todoList[todoIndex].doneAt = args.doneAt;
      await saveUserToDB(userDB, context.db);
      return true;
    },
    deleteTodo: async (
      _: GraphQLParent,
      args: {id: string},
      context: GraphQLContext,
    ) => {
      if (!context.userId) {
        return null;
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      const todoIndex = userDB.todoList.findIndex(item => item.id === args.id);
      if (todoIndex === -1) {
        return false;
      }
      userDB.todoList.splice(todoIndex, 1);
      await saveUserToDB(userDB, context.db);
      return true;
    },
  },
};

export default graphQLResolvers;
