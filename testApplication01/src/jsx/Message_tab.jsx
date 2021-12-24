import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import User from './User';

const Message_tab = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.mainView}>
    //   <Text>Message_tab</Text>
    // </View>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Message_tab;
