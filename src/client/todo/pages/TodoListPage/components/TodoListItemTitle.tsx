import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Todo} from '../../../../../shared/todo/models/Todo';
import PrimaryTextStyle from '../../../../common/styling/PrimaryTextStyle';

type Props = {
  todo: Todo;
};

function TodoListItemTitle(props: Props) {
  const isChecked = Boolean(props.todo.doneAt);
  return (
    <Text style={[styles.title, isChecked ? styles.titleChecked : null]}>
      {props.todo.title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    ...PrimaryTextStyle,
    fontSize: 16,
  },
  titleChecked: {
    textDecorationLine: 'line-through',
  },
});

export default TodoListItemTitle;
