/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const NumList = ({ randomNum, substractRandomNumber }) => {
    return (
        randomNum.map((v, i) => (
            <TouchableOpacity key={i} onPress={() => substractRandomNumber(i)} style={styles.numList}>
                <Text>{v}</Text>
            </TouchableOpacity>
        ))
    );
}

const styles = StyleSheet.create({
    numList: {
        width: '100%',
        padding: 5,
        marginTop: 5,
        backgroundColor: '#DDF',
        alignItems: 'center',
    }
});

export default NumList;
