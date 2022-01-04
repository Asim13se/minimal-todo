import React from 'react';
import TextButton from '../../../common/components/buttons/TextButton';
import {useTranslation} from 'react-i18next';
import {ViewStyle} from 'react-native';

type Props = {
  style?: ViewStyle;
  onPress: () => void;
};

function TodoSaveButton(props: Props) {
  const {t} = useTranslation();
  return (
    <TextButton
      style={props.style}
      onPress={props.onPress}
      text={t('TodoInput.saveButton')}
    />
  );
}

export default TodoSaveButton;
