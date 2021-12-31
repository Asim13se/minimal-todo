import React from 'react';
import Button from '../../common/components/buttons/Button';
import {useTranslation} from 'react-i18next';
import useIsNewTodoInputVisible from '../hooks/useIsNewTodoInputVisible';

function NewTodoButton() {
  const {t} = useTranslation();
  const {setIsNewTodoInputVisible, isNewTodoInputVisible} =
    useIsNewTodoInputVisible();
  const handlePress = () => {
    setIsNewTodoInputVisible(!isNewTodoInputVisible);
  };
  return (
    <Button onPress={handlePress} text={t('TodoListPage.NewTodoButtonText')} />
  );
}

export default NewTodoButton;
