import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  isVisible: boolean;
};

function NewTodoInput(props: Props) {
  return props.isVisible ? (
    <View>
      <Text>{'hello'}</Text>
    </View>
  ) : null;
}

export default NewTodoInput;
