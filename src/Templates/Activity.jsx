import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {data} from './utils/data';
import CardActivity from './components/CardActivity';

const Activity = () => {
  return (
    <View>
      {/* {data.map((item, index) => (
        <CardActivity data={item} index={index} />
      ))} */}

      <FlatList
        data={data}
        renderItem={({item}) => <CardActivity data={item} index={item.id} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Activity;
