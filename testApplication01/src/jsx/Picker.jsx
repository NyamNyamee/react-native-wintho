/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerComp = () => {
  const [country, setCountry] = useState('korea');

  return (
    <View style={styles.mainView}>
      <Picker
        selectedValue={country}
        onValueChange={(v, i) => {
          setCountry(v);
        }}
        style={styles.picker}
      >
        <Picker.Item label="Korea" value="korea" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="America" value="america" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#999',
  },
  picker: {
    width: 250,
    height: 50,
    backgroundColor: '#3F1',
  },
});

export default PickerComp;
