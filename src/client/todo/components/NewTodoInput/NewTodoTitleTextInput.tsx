import React, {useEffect, useRef} from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import PrimaryTextStyle from '../../../common/styling/PrimaryTextStyle';
import {OnTitleChange} from '../../types/OnTitleChange';

type Props = {
  title: string;
  onTitleChange: OnTitleChange;
  isFocused: boolean;
};

function NewTodoTitleTextInput(props: Props) {
  const {t} = useTranslation();
  const textInputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (props.isFocused) {
      setTimeout(() => {
        textInputRef.current?.focus();
      }, 10);
    } else {
      textInputRef.current?.blur();
      Keyboard.dismiss();
    }
  }, [props.isFocused]);
  return (
    <TextInput
      placeholder={t('NewTodoInput.textInputPlaceholder')}
      value={props.title}
      style={styles.textInput}
      onChangeText={props.onTitleChange}
      ref={textInputRef}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    ...PrimaryTextStyle,
  },
});

export default NewTodoTitleTextInput;
