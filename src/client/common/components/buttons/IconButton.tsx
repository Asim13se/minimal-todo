import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../styling/Colors';

type Props = {
  iconName: string;
  size?: number;
  iconColor?: string;
  onPress: () => void;
  style?: ViewStyle;
};

function IconButton(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.touchable, props.style]}
      onPress={props.onPress}
      activeOpacity={0.6}>
      <Icon
        name={props.iconName}
        size={props.size || 20}
        color={props.iconColor || Colors.iconColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
