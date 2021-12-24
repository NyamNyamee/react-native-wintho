import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const User_tab = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Text>User_tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User_tab;
