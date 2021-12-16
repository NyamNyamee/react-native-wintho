import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Text>Home Screen</Text>
      <Button
        title="GoToUser"
        onPress={() => {
          navigation.navigate('User', {
            userIndex: 100,
            userName: 'Gildong',
            userLastName: 'Hong',
          });
        }}
      />
      <Button
        title="changeHeaderStyle"
        onPress={() => {
          navigation.setOptions({
            title: 'Changed Home Title',
            headerStyle: { backgroundColor: '#FAA' },
            headerTitleStyle: { fontWeight: 'bold', color: 'purple' },
          });
        }}
      />
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

export default Home;
