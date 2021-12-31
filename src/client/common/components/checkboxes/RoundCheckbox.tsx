import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../styling/Colors';

type Props = {
  isChecked: boolean;
  size?: number;
  onPress: () => void;
};

function RoundCheckbox(props: Props) {
  const size = props.size || 24;
  const style: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: props.isChecked ? Colors.checkbox : '#fff',
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.touchable, style]}
      onPress={props.onPress}>
      {props.isChecked ? (
        <Icon name={'check'} size={15} color={'#fff'} />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderColor: Colors.checkbox,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RoundCheckbox;
