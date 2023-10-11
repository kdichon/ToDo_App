import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
const headerImage = require('./../assets/images/user-profile.jpg');
const notification = require('./../assets/images/Notification.png');

const Header = ({user, height = '100%', width = '100%'}) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + '/' + month + '/' + year);
  }, []);
  return (
    <View
      style={{
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={styles.imageContainer}>
        <Image source={headerImage} style={[{height, width}]} />
      </View>

      <View style={styles.title}>
        <Text style={styles.bigTitle}>Hi, {user?.firstname}</Text>
        <Text style={styles.smallTitle}>{currentDate}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={notification} style={[{height, width}]} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  bigTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  smallTitle: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    opacity: 0.6,
  },
});
