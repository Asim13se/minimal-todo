import React from 'react';
import {View} from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

function Spacer(props: Props) {
  return (
    <View
      style={{
        height: props.height,
        width: props.width,
      }}
    />
  );
}

export default Spacer;
