import React from 'react';
import Button from '../../common/components/buttons/Button';
import {useTranslation} from 'react-i18next';
import useIsNewTodoInputVisible from '../hooks/useIsNewTodoInputVisible';

function NewTodoButton() {
  const {t} = useTranslation();
  const {setIsNewTodoInputVisible} = useIsNewTodoInputVisible();
  const handlePress = () => {
    setIsNewTodoInputVisible(true);
  };
  return (
    <Button
      testID={'NewTodoButton_testID'}
      onPress={handlePress}
      text={t('TodoListPage.NewTodoButtonText')}
    />
  );
}

export default NewTodoButton;
