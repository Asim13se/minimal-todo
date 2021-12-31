import React from 'react';
import {View, Text} from 'react-native';
import {Todo} from '../../../../../shared/todo/models/Todo';

type Props = {
  item: Todo;
};

function TodoListItem(props: Props) {
  return (
    <View>
      <Text>{props.item.title}</Text>
    </View>
  );
}

export default TodoListItem;
