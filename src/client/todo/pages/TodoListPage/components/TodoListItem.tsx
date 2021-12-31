import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Todo} from '../../../../../shared/todo/models/Todo';
import {OnPressTodoItem} from '../types/OnPressTodoItem';
import TodoListItemCheckbox from './TodoListItemCheckbox';
import {OnPressTodoItemCheckbox} from '../types/OnPressTodoItemCheckbox';
import TodoListItemTitle from './TodoListItemTitle';
import Spacer from '../../../../common/components/layout/Spacer';
import TodoDueDate from '../../../components/TodoDueDate';

type Props = {
  item: Todo;
  onPress: OnPressTodoItem;
  onPressCheckbox: OnPressTodoItemCheckbox;
};

function TodoListItem(props: Props) {
  const handlePress = () => {
    props.onPress(props.item);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.touchable}
      onPress={handlePress}>
      <View style={styles.row}>
        <TodoListItemCheckbox
          todo={props.item}
          onPress={props.onPressCheckbox}
        />
        <Spacer width={15} />
        <View>
          <TodoListItemTitle todo={props.item} />
          <Spacer height={8} />
          <TodoDueDate todo={props.item} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
  },
});

export default TodoListItem;
