import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const User = ({ navigation, route }) => {
  const { params } = route;
  const userIndex = params ? params.userIndex : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;

  const setHeaderStyle = () => {
    navigation.setOptions({
      title: 'User Title',
      headerStyle: { backgroundColor: '#FAA' },
      headerTitleStyle: { fontWeight: 'bold', color: 'purple' },
      headerBackTitle: 'back',
      headerRight: () => (
        <Button
          title="UserInfo"
          onPress={() => {
            alert('UserInfo button clicked!');
          }}
          color="#F99"
        />
      ),
    });
  };

  useEffect(() => {
    setHeaderStyle();
  }, []);

  return (
    <View style={styles.mainView}>
      <Text>User Screen</Text>
      <Text>User Index: {JSON.stringify(userIndex)}</Text>
      <Text>User Name: {JSON.stringify(userName)}</Text>
      <Text>User LastName: {JSON.stringify(userLastName)}</Text>
      <Button
        title="GoToHome"
        onPress={() => {
          navigation.navigate('Home');
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

export default User;
