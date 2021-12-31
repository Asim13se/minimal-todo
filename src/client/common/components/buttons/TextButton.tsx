import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import PrimaryTextStyle from '../../styling/PrimaryTextStyle';
import Colors from '../../styling/Colors';

type Props = {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
};

function TextButton(props: Props) {
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={0.4}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    ...PrimaryTextStyle,
    fontWeight: '600',
    fontSize: 16,
    color: Colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default TextButton;
