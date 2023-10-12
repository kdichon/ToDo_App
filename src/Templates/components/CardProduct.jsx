import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';

const CardProduct = ({product}) => {
  return (
    <TouchableOpacity style={styles.CardViewProduct}>
      <ImageBackground
        source={{uri: product?.thumbnail}}
        style={styles.cardImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}></ImageBackground>
      <Text style={{fontSize: 12, fontWeight: '600'}}>{product.title}</Text>
      <Text style={{fontSize: 12, fontWeight: '800'}}>$ {product.price}</Text>
    </TouchableOpacity>
  );
};

export default CardProduct;
