import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const SliderComp = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const onChangeSliderValue = value => {
    setSliderValue(value);
  };

  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={onChangeSliderValue}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="white"
        step={1}
        style={styles.mainSlider}
      />
      <Text>
        <ActivityIndicator size="large" color="red" animating={true} />
        {sliderValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSlider: {
    width: 300,
    height: 30,
    backgroundColor: '#cecece',
  },
});

export default SliderComp;
