import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import Colors from '../../styling/Colors';

type Props = {
  message: string;
  style?: TextStyle;
};

function ErrorMessage(props: Props) {
  return <Text style={[styles.message, props.style]}>{props.message}</Text>;
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    color: Colors.error,
    fontSize: 18,
  },
});

export default ErrorMessage;
