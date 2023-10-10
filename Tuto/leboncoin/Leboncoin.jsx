import {View, Text, FlatList} from 'react-native';
import React from 'react';
import stylLecoin from './stylLecoin';
import {products} from './data';
import ItemLeboncoin from './ItemLeboncoin';

const Leboncoin = () => {
  return (
    <View style={stylLecoin.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ItemLeboncoin product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Leboncoin;
