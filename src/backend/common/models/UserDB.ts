import {User} from '../../../shared/common/models/User';
import {Todo} from '../../../shared/todo/models/Todo';

export type UserDB = User & {todoList: Todo[]};
