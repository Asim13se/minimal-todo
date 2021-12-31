import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import IconButton from '../../common/components/buttons/IconButton';
import Colors from '../../common/styling/Colors';
import {OnDueDateChange} from '../types/OnDueDateChange';

type Props = {
  dueDate: Date | null;
  onDueDateChange: OnDueDateChange;
};

function TodoDueDateIconButton(props: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handlePress = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirmDatePicker = (date: Date) => {
    props.onDueDateChange(date);
    setDatePickerVisibility(false);
  };
  const handleCancelDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <>
      <IconButton
        iconName={'calendar'}
        onPress={handlePress}
        iconColor={Colors.primary}
        size={24}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'datetime'}
        onConfirm={handleConfirmDatePicker}
        onCancel={handleCancelDatePicker}
        date={props.dueDate || new Date()}
      />
    </>
  );
}

export default TodoDueDateIconButton;
