/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert('TouchableOpacity onPress');
      }}
      onLongPress={() => {
        alert('TouchableOpacity onLongPress');
      }}
      style={styles.header}
    >
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 5,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
  },
});

export default Header;
