import {Todo} from '../../../shared/todo/models/Todo';
import {User} from '../../../shared/common/models/User';
import {UserDB} from '../models/UserDB';
import getUserFromDB from '../utils/getUserFromDB';
import saveUserToDB from '../utils/saveUserToDB';

const todoList: Todo[] = [
  {
    id: 'todo1_id',
    title: 'Todo number 1',
  },
  {
    id: 'todo2_id',
    title: 'Todo number 2',
  },
];

const graphQLResolvers = {
  Query: {
    todoList: async (_, args, context) => {
      if (!context.userId) {
        return [];
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      return userDB.todoList || [];
    },
  },
  Mutation: {
    signUpAnonymousUser: async (_, {id}: {id: string}, context) => {
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
      _,
      args: {id: string; title: string; dueDate?: string},
      context,
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
    toggleTodoCompletion: async (
      _,
      args: {id: string; doneAt: string},
      context,
    ) => {
      if (!context.userId) {
        return null;
      }
      const userDB = await getUserFromDB(context.userId, context.db);
      const todoIndex = userDB.todoList.findIndex(item => item.id === args.id);
      userDB.todoList[todoIndex].doneAt = args.doneAt;
      await saveUserToDB(userDB, context.db);
      return true;
    },
  },
};

export default graphQLResolvers;
