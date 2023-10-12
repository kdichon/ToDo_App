import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardPopular = ({popular}) => {
  return (
    <TouchableOpacity style={styles.CardViewPopular}>
      <ImageBackground
        source={{uri: popular?.thumbnail}}
        style={styles.cardImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20, width: 100}}></ImageBackground>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'cyan',
          fontSize: 18,
          fontWeight: '900',
        }}>
        <Text style={{fontSize: 18, fontWeight: '900'}}>{popular?.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            margin: 5,
          }}>
          <Text style={{fontSize: 12, fontWeight: '800'}}>
            $ {popular?.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              textDecorationLine: 'line-through',
            }}>
            $ {popular?.discountPercentage}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.favIcon}>
          <Icon name="favorite-outline" size={30} color="#fff" />
        </View>
        <Text>{popular.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPopular;
