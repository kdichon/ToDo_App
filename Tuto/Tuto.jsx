import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import tutoStyles, {theme} from './tutoStyles';
import {Button} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tuto = () => {
  return (
    <View style={tutoStyles.container}>
      <View style={tutoStyles.frameCard}>
        <ImageBackground
          source={require('./../src/assets/logo-og.png')}
          resizeMode="cover"
          style={tutoStyles.image}>
          <View style={tutoStyles.exo}>
            <View style={tutoStyles.box1} />
            <View style={tutoStyles.box2}>
              <Button icon="camera"></Button>
            </View>
            <View style={tutoStyles.box3} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Tuto;
