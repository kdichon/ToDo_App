import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';

const ItemCategory = ({category}) => {
  return (
    <View style={styles.itemCategoryScroll}>
      <TouchableOpacity>
        <Text style={styles.textCategoryScroll}>{category.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCategory;
