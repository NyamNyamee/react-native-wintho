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

import Joona from './src/asset/img/joona.png';
import HomeIcon from './src/asset/img/home.png';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator
        initialRouteName="Home"
        // 모든 스택 스크린에 공통 적용되는 옵션
        screenOptions={{
          headerStyle: { backgroundColor: '#F55' }, // 헤더 스타일
          headerTintColor: '#AAF', // 이전으로 이동하는 화살표 타이틀 색상
          headerTitleStyle: { fontWeight: 'bold', color: '#FFF' }, // 헤더 타이틀 스타일
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <HomeLogo />,
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => {
                  alert('info button clicked!');
                }}
                color="#F99"
              />
            ),
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          initialParams={{
            userIndex: 1,
            userName: 'Inboo',
            userLastName: 'Lee',
          }}
        />
      </Stack.Navigator>
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
