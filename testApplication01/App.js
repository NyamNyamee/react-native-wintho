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
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from './src/jsx/Header';
import Generator from './src/jsx/Generator';
import NumList from './src/jsx/NumList';
import Input from './src/jsx/Input';
import PickerComp from './src/jsx/Picker';
import SliderComp from './src/jsx/Slider';
import Modal from './src/jsx/ModalComponent';
import Home from './src/jsx/Home';
import User from './src/jsx/User';
import HomeLogo from './src/jsx/HomeLogo';
import Home_tab from './src/jsx/Home_tab';
import User_tab from './src/jsx/User_tab';
import Message_tab from './src/jsx/Message_tab';

import Joona from './src/asset/img/joona.png';
import HomeIcon from './src/asset/img/home.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize, iconColor;

  if (name === 'Home_tab') {
    iconName = 'home-outline';
    // iconImagePath = require('./src/asset/img/home.png');
  } else if (name === 'User_tab') {
    iconName = 'people-outline';
    // iconImagePath = require('./src/asset/img/account_01.png');
  } else if (name === 'Message_tab') {
    iconName = 'chatbox-outline';
    // iconImagePath = require('./src/asset/img/chat_01.png');
  }

  iconSize = focused ? 25 : 20;
  iconColor = focused ? '#28F' : 'grey';

  return (
    // <Image
    //   style={{
    //     width: focused ? 18 : 15,
    //     height: focused ? 24 : 20,
    //   }}
    //   source={iconImagePath}
    // />
    <Ionicons name={iconName} size={iconSize} color={iconColor} />
  );
};

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('HeaderTitle');
  const [random, setRandom] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [alphabetArr, setAlphabetArr] = useState(['a', 'b']);

  const onAddRandomNumber = () => {
    let randomNumber = Math.round(Math.random() * 45) + 1;
    if (random.includes(randomNumber)) {
      alert(`${randomNumber} 은 중복입니다`);
      // onAddRandomNumber(); // 중복일때 재귀호출로 다시뽑음. 근데 45개 다뽑고나면 무한루프에 빠지니 state에 try카운트같은거 추가해서 하나씩 늘리면 될듯.
    } else {
      setRandom([...random, randomNumber]);
    }
  };

  const onSubstractRandomNumber = i => {
    let randomArr = random.filter((val, idx) => i != idx);
    setRandom(randomArr);
  };

  const onChangeInput = e => {
    setTextInput(e);
  };

  const onAddTextInput = () => {
    let newAlphabetArr = [...alphabetArr, textInput];
    setAlphabetArr(newAlphabetArr);
    setTextInput('');
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home_tab"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#28F',
          tabBarInactiveTintColor: '#777',
          headerShown: false,
          tabBarLabel: route.name,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
        })}
      >
        <Tab.Screen name="Home_tab" component={Home_tab} />
        <Tab.Screen name="User_tab" component={User_tab} />
        <Tab.Screen name="Message_tab" component={Message_tab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center', // 가로 정렬
    // justifyContent: 'center', // 세로 정렬
  },
  firstSubView: {
    width: '20%',
    margin: 5,
    padding: 10,
    backgroundColor: '#F7F',
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
  },
  secondSubView: {
    flex: 1,
    width: '30%',
    margin: 5,
    padding: 10,
    backgroundColor: '#AFA',
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
  },
  thirdSubView: {
    flex: 2,
    width: '50%',
    margin: 5,
    padding: 10,
    backgroundColor: '#AAF',
    alignItems: 'center', // 가로 정렬
    justifyContent: 'center', // 세로 정렬
  },
  firstText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFF',
  },
  numListScrollView: {
    width: '100%',
  },
  input: {
    width: '100%',
    margin: 5,
    backgroundColor: '#DDD',
  },
  textList: {
    marginTop: 5,
    padding: 5,
    fontWeight: 'normal',
    color: '#555',
    backgroundColor: '#DDF',
  },
  image: {
    width: '100%',
  },
});

export default App;
