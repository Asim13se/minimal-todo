import React, {ReactNode, useEffect} from 'react';
import {
  Keyboard,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheetLib from 'reanimated-bottom-sheet';
import {BlurView} from '@react-native-community/blur';
import Animated from 'react-native-reanimated';

type Props = {
  isVisible: boolean;
  renderContent: () => ReactNode;
  onClose: () => void;
  height?: number;
};

export default function BottomSheet(props: Props) {
  const height = props.height || 300;
  const AnimatedView = Animated.View;
  let fall = new Animated.Value(1);

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    );
  };

  const renderContent = () => (
    <View style={[styles.bottomSheet, {height}]}>
      <View style={styles.notch} />
      {props.renderContent()}
    </View>
  );

  const sheetRef = React.useRef<BottomSheetLib>(null);
  const openBottomSheet = () => {
    sheetRef.current!.snapTo(1);
  };
  const closeBottomSheet = () => {
    sheetRef.current!.snapTo(0);
  };

  useEffect(() => {
    if (props.isVisible) {
      Keyboard.dismiss();
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [props.isVisible]);
  return (
    <>
      {Platform.OS === 'android' && renderShadow()}
      {props.isVisible ? (
        <>
          <TouchableOpacity
            onPress={() => props.onClose()}
            style={styles.dismissArea}>
            <BlurView style={styles.blurView} blurType="dark" />
          </TouchableOpacity>
        </>
      ) : null}
      <BottomSheetLib
        enabledContentTapInteraction={false}
        ref={sheetRef}
        snapPoints={[0, height]}
        borderRadius={20}
        renderContent={renderContent}
        initialSnap={0}
        callbackNode={fall}
        onCloseEnd={() => {
          props.onClose();
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  notch: {
    alignSelf: 'center',
    height: 5,
    width: 120,
    backgroundColor: 'rgb(112, 112, 112)',
    borderRadius: 30,
  },
  dismissArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  // Shadow
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});
