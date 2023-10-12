import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from 'react-native-paper';
const burger = require('./../assets/images/Hamburger.png');
const delivery = require('./../assets/images/delivery.png');

const Burger = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Kdichon's Foods</Text>
      </View>
      <View style={styles.box2}></View>
      <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button mode="outlined" onPress={() => {}}>
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default Burger;
