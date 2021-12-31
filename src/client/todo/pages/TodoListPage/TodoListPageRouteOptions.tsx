import {TodoListPageProps} from './TodoListPage';
import {NativeStackNavigationOptionsFunction} from '../../../common/navigation/types/NativeStackNavigationOptionsFunction';
import i18n from '../../../common/i18n/i18n';

const TodoListPageRouteOptions: NativeStackNavigationOptionsFunction<
  TodoListPageProps
> = () => {
  return {
    title: i18n.t('TodoListPage.title'),
  };
};

export default TodoListPageRouteOptions;
