import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import stylLecoin from './stylLecoin';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemLeboncoin = ({product}) => {
  const goto = () => {
    console.log('product ->', product.id);
  };

  return (
    <TouchableOpacity onPress={goto} style={stylLecoin.cardContainer}>
      <ImageBackground
        source={{uri: product?.thumbnail}}
        style={stylLecoin.cardImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}>
        <View style={stylLecoin.favIcon}>
          <Icon name="favorite-outline" size={30} color="#fff" />
        </View>
      </ImageBackground>
      <View style={stylLecoin.containerTitlePrice}>
        <Text style={stylLecoin.title}>{product?.title}</Text>
        <Text style={stylLecoin.price}>{product?.price} $</Text>
      </View>
      <View style={stylLecoin.containerBrand}>
        <Text style={stylLecoin.brand}>{product?.brand}</Text>
        <Text style={stylLecoin.brand}>{product?.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLeboncoin;
