import React from 'react';
import TextButton from '../../../common/components/buttons/TextButton';
import {useTranslation} from 'react-i18next';
import {ViewStyle} from 'react-native';

type Props = {
  style?: ViewStyle;
  onPress: () => void;
};

function NewTodoSaveButton(props: Props) {
  const {t} = useTranslation();
  return (
    <TextButton
      style={props.style}
      onPress={props.onPress}
      text={t('NewTodoInput.saveButton')}
    />
  );
}

export default NewTodoSaveButton;
