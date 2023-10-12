import {Image, Text, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
const next = require('./../../assets/images/next.png');
const cycle = require('./../../assets/images/cycle.png');
const yoga = require('./../../assets/images/yoga.png');
const walk = require('./../../assets/images/walk.png');
const star = require('./../../assets/images/Star.png');

const CardActivity = ({data}) => {
  return (
    <View
      style={{
        flex: 1,
        height: 150, // index === 1 ? 180 : 150,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
        <Progress
          size={50}
          progress={data.status / 100}
          showsText
          unfilledColor="#ededed"
          borderColor="#ededed"
          color={data.darkColor}
          direction="counter-clockwise"
          fill="white"
          strokeCap="round"
          thickness={5}
          style={{
            shadowColor: 'grey',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold',
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Day     1'}
        </Text>
        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}>
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CardActivity;
