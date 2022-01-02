import React from 'react';
import FloatingButton from '../../common/components/buttons/FloatingButton';
import useIsNewTodoInputVisible from '../hooks/useIsNewTodoInputVisible';

function NewTodoFloatingButton() {
  const {setIsNewTodoInputVisible} = useIsNewTodoInputVisible();
  const handlePress = () => {
    setIsNewTodoInputVisible(true);
  };
  return (
    <FloatingButton
      testID={'NewTodoFloatingButton_testID'}
      onPress={handlePress}
      iconName={'plus'}
    />
  );
}

export default NewTodoFloatingButton;
