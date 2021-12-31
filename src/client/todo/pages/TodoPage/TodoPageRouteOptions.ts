import {useTranslation} from 'react-i18next';
import {NativeStackNavigationOptionsFunction} from '../../../common/navigation/types/NativeStackNavigationOptionsFunction';
import {TodoPageProps} from './TodoPage';

const TodoPageRouteOptions: NativeStackNavigationOptionsFunction<
  TodoPageProps
> = () => {
  const {t} = useTranslation();
  return {
    title: t('TodoPage.title'),
  };
};

export default TodoPageRouteOptions;
