import React from 'react';
import {StyleSheet, TouchableOpacity, Text, ViewStyle} from 'react-native';
import PrimaryTextStyle from '../../styling/PrimaryTextStyle';
import Colors from '../../styling/Colors';

type Props = {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
};

function Button(props: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.touchable, props.style]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: Colors.button,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: {
    ...PrimaryTextStyle,
    fontSize: 14,
    color: '#fff',
  },
});

export default Button;
