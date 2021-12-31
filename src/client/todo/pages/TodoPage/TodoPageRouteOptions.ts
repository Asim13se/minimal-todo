import i18n from '../../../common/i18n/i18n';
import {NativeStackNavigationOptionsFunction} from '../../../common/navigation/types/NativeStackNavigationOptionsFunction';
import {TodoPageProps} from './TodoPage';

const TodoPageRouteOptions: NativeStackNavigationOptionsFunction<
  TodoPageProps
> = () => {
  return {
    title: i18n.t('TodoPage.title'),
  };
};

export default TodoPageRouteOptions;
