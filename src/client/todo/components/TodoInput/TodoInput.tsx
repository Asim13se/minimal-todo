import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Portal from '@burstware/react-native-portal';
import BottomSheet from '../../../common/components/containers/BottomSheet';
import TodoTitleTextInput from './TodoTitleTextInput';
import {OnTitleChange} from '../../types/OnTitleChange';
import TodoSaveButton from './TodoSaveButton';
import TodoDueDateIconButton from '../TodoDueDateIconButton';
import Spacer from '../../../common/components/layout/Spacer';
import {OnDueDateChange} from '../../types/OnDueDateChange';
import TodoDueDate from '../TodoDueDate';
import {OnPressDeleteTodo} from '../../types/OnPressDeleteTodo';
import TodoInputDeleteButton from './TodoInputDeleteButton';
import Colors from '../../../common/styling/Colors';

type Props = {
  isVisible: boolean;
  isLoading?: boolean;
  onClose: () => void;
  title: string;
  onTitleChange: OnTitleChange;
  onPressSave: () => void;
  dueDate: Date | null;
  onDueDateChange: OnDueDateChange;
  onClearDueDate: () => void;
  onPressDelete?: OnPressDeleteTodo;
};

function TodoInput(props: Props) {
  const renderContent = () => {
    return (
      <View style={styles.content}>
        <TodoTitleTextInput
          title={props.title}
          onTitleChange={props.onTitleChange}
          isFocused={props.isVisible}
        />
        <Spacer height={20} />
        {props.dueDate ? (
          <>
            <TodoDueDate
              dueDate={props.dueDate}
              onPressClear={props.onClearDueDate}
            />
            <Spacer height={10} />
          </>
        ) : null}
        <View style={styles.row}>
          <TodoDueDateIconButton
            onDueDateChange={props.onDueDateChange}
            dueDate={props.dueDate}
          />
          <Spacer width={10} />
          {props.onPressDelete ? (
            <TodoInputDeleteButton onPress={props.onPressDelete} />
          ) : null}
        </View>
        {props.isLoading ? (
          <ActivityIndicator style={styles.spinner} color={Colors.spinner} />
        ) : null}
        <TodoSaveButton style={styles.saveButton} onPress={props.onPressSave} />
      </View>
    );
  };

  return (
    <Portal>
      <BottomSheet
        onClose={props.onClose}
        isVisible={props.isVisible}
        renderContent={renderContent}
        height={props.dueDate ? 510 : 460}
      />
    </Portal>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: 'flex-start',
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    end: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
    bottom: 5,
    end: 85,
  },
});

export default TodoInput;
