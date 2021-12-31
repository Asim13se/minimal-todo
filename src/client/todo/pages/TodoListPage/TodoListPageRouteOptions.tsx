import {useTranslation} from 'react-i18next';
import {TodoListPageProps} from './TodoListPage';
import {NativeStackNavigationOptionsFunction} from '../../../common/navigation/types/NativeStackNavigationOptionsFunction';

const TodoListPageRouteOptions: NativeStackNavigationOptionsFunction<
  TodoListPageProps
> = () => {
  const {t} = useTranslation();
  return {
    title: t('TodoListPage.title'),
  };
};

export default TodoListPageRouteOptions;
