import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import Colors from '../../common/styling/Colors';
import PrimaryTextStyle from '../../common/styling/PrimaryTextStyle';
import IconButton from '../../common/components/buttons/IconButton';

type Props = {
  dueDate: Date | null;
  isPastDueDate?: boolean;
  onPress?: () => void;
  onPressClear?: () => void;
};

function TodoDueDate(props: Props) {
  const {t} = useTranslation();
  if (!props.dueDate) {
    return null;
  }
  const dueDate = new Date(props.dueDate);
  return (
    <TouchableOpacity
      testID={'TodoDueDate_testID'}
      activeOpacity={0.6}
      style={[
        TodoDueDateStyles.touchable,
        props.isPastDueDate ? TodoDueDateStyles.pastDueDateTouchable : null,
      ]}
      onPress={props.onPress}
      disabled={!props.onPress}>
      <Text
        testID={'TodoDueDate_text_testID'}
        style={[
          TodoDueDateStyles.dueDateText,
          props.isPastDueDate ? TodoDueDateStyles.pastDueDateText : null,
        ]}>
        {t('TodoListItem.dueDate', {date: dueDate})}
      </Text>
      {props.onPressClear ? (
        <IconButton
          style={TodoDueDateStyles.clearButton}
          iconName={'close'}
          onPress={props.onPressClear}
          size={20}
          testID={'TodoDueDate_clear_button_testID'}
        />
      ) : null}
    </TouchableOpacity>
  );
}

export const TodoDueDateStyles = StyleSheet.create({
  touchable: {
    borderWidth: 0.8,
    borderColor: Colors.borderColor,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
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
  clearButton: {
    marginStart: 5,
    marginEnd: -10,
  },
});

export default TodoDueDate;
