/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

const Input = () => {
    const [textInput, setTextInput] = useState('');

    const onChangeInput = (e) => {
        setTextInput(e);
    }

    return (
        <TextInput
            value={textInput}
            onChangeText={onChangeInput}
            placeholder='text'
            multiline={true}  // 값이 길어지면 자동 줄바꿈
            autoCapitalize='none'  // 첫글자 입력 시 대문자 키패드 나타날지 선택
            maxLength={50} // 입력값 길이
            // editable={false} // 입력불가
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        margin: 5,
        backgroundColor: '#DDD',
    }
});

export default Input;
