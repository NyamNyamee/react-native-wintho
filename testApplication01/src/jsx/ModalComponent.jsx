/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Image } from 'react-native';
import Joona from '../asset/img/joona.png';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';

const ModalComponent = () => {
  const [isModalActivated, setIsModalActivated] = useState(false);

  const handleModal = () => {
    setIsModalActivated(!isModalActivated);
  };

  return (
    <View>
      <Button title="openModal" onPress={handleModal} />
      <Modal
        visible={isModalActivated}
        animationType={'slide'}
        onShow={() => {
          alert('modal loaded');
        }}
      >
        <View style={styles.modalView}>
          <Text>This is modal</Text>
          <Image source={Joona} resizeMode="contain" style={styles.image} />
          <Button title="closeModal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 60,
    backgroundColor: '#F00',
  },
  image: {
    width: '100%',
  },
});

export default ModalComponent;
