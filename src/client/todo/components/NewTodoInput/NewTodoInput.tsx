import React from 'react';
import {StyleSheet, View} from 'react-native';
import Portal from '@burstware/react-native-portal';
import BottomSheet from '../../../common/components/containers/BottomSheet';
import NewTodoTitleTextInput from './NewTodoTitleTextInput';
import {OnTitleChange} from '../../types/OnTitleChange';
import NewTodoSaveButton from './NewTodoSaveButton';
import TodoDueDateIconButton from '../TodoDueDateIconButton';
import Spacer from '../../../common/components/layout/Spacer';
import {OnDueDateChange} from '../../types/OnDueDateChange';
import TodoDueDate from '../TodoDueDate';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  onTitleChange: OnTitleChange;
  onPressSave: () => void;
  dueDate: Date | null;
  onDueDateChange: OnDueDateChange;
  onClearDueDate: () => void;
};

function NewTodoInput(props: Props) {
  const renderContent = () => {
    return (
      <View style={styles.content}>
        <NewTodoTitleTextInput
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
        <TodoDueDateIconButton
          onDueDateChange={props.onDueDateChange}
          dueDate={props.dueDate}
        />
        <NewTodoSaveButton
          style={styles.saveButton}
          onPress={props.onPressSave}
        />
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
});

export default NewTodoInput;
