import React from 'react';
import {StyleSheet} from 'react-native';
import IconButton from './IconButton';
import Colors from '../../styling/Colors';
import ShadowStyle from '../../styling/ShadowStyle';

type Props = {
  iconName: string;
  onPress: () => void;
  testID?: string;
};

function FloatingButton(props: Props) {
  return (
    <IconButton
      onPress={props.onPress}
      iconName={props.iconName}
      style={styles.button}
      iconColor={Colors.primary}
      size={24}
      testID={props.testID}
    />
  );
}

const size = 52;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    width: size,
    height: size,
    borderRadius: size / 2,
    position: 'absolute',
    bottom: 52,
    end: 42,
    ...ShadowStyle,
  },
});

export default FloatingButton;
