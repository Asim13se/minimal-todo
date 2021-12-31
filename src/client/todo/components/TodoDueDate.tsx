import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {isAfter} from 'date-fns';
import Colors from '../../common/styling/Colors';
import PrimaryTextStyle from '../../common/styling/PrimaryTextStyle';
import {Todo} from '../../../shared/todo/models/Todo';

type Props = {
  todo: Todo;
  onPress?: () => void;
};

function TodoDueDate(props: Props) {
  const {t} = useTranslation();
  if (!props.todo.dueDate) {
    return null;
  }
  const dueDate = new Date(props.todo.dueDate);
  const isPastDueDate = isAfter(new Date(), dueDate) && !props.todo.doneAt;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.touchable,
        isPastDueDate ? styles.pastDueDateTouchable : null,
      ]}
      onPress={props.onPress}
      disabled={!props.onPress}>
      <Text
        style={[
          styles.dueDateText,
          isPastDueDate ? styles.pastDueDateText : null,
        ]}>
        {t('TodoListItem.dueDate', {date: dueDate})}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderWidth: 0.8,
    borderColor: Colors.borderColor,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignSelf: 'flex-start',
  },
  pastDueDateTouchable: {
    borderColor: Colors.pastDueDateColor,
  },
  dueDateText: {
    ...PrimaryTextStyle,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text2,
  },
  pastDueDateText: {
    color: Colors.pastDueDateColor,
  },
});

export default TodoDueDate;
