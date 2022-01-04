import React from 'react';
import Colors from '../../../common/styling/Colors';
import IconButton from '../../../common/components/buttons/IconButton';
import {OnPressDeleteTodo} from '../../types/OnPressDeleteTodo';

type Props = {
  onPress: OnPressDeleteTodo;
};

function TodoInputDeleteButton(props: Props) {
  const handlePress = () => {
    props.onPress();
  };
  return (
    <IconButton
      iconName={'delete'}
      onPress={handlePress}
      iconColor={Colors.iconColor}
      size={24}
    />
  );
}

export default TodoInputDeleteButton;
