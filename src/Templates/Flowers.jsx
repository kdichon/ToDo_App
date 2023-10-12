import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {categories, popular, products} from './utils/data';
import ItemCategory from './components/ItemCategory';
import CardProduct from './components/CardProduct';
import CardPopular from './components/CardPopular';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../styles';

// const {width, heigth} = Dimensions.get('window');

const Flowers = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color={theme.colors.primary} />
          {/* <Text style={styles.fontTitle}>menu</Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.avatar}
            source={require('./../assets/images/user-profile.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.homeTitle}>
        <Text style={styles.fontTitle}>Discover</Text>
      </View>
      <View>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          placeholder="search"
          left={<TextInput.Icon icon="magnify" />}
          style={{
            borderStartRadius: 50,
            backgroundColor: 'black',
            borderBottomEndRadius: 50,
          }}
        />
      </View>
      <View style={styles.categoryScroll}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={({item}) => <ItemCategory category={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.CardView}>
        <FlatList
          horizontal={true}
          data={products}
          renderItem={({item}) => <CardProduct product={item} />}
          keyExtractor={item => item.id}
          //   numColumns={'2'}
        />
      </View>
      <View>
        <View style={styles.sidePopular}>
          <Text style={{fontWeight: '800', fontSize: 16}}>Popular</Text>
          <Text>See all</Text>
        </View>
        <View style={{backgroundColor: 'green', marginVertical: 5}}>
          <FlatList
            data={popular}
            renderItem={({item}) => <CardPopular popular={item} />}
            key={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Flowers;
