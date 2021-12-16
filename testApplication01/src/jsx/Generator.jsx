/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Generator = ({ addRandomNumber }) => {
  return (
    <View style={styles.generator}>
      <Button title="Add Random Lotto Number" onPress={addRandomNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    width: '100%',
    padding: 5,
    backgroundColor: '#AAF',
    alignItems: 'center',
  },
});

export default Generator;
