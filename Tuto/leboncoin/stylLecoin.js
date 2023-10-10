import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    // backgroundColor: 'yellow',
    padding: 10,
  },
  cardImage: {
    // backgroundColor: 'cyan',
    width: width - 20,
    height: ((width - 20) / 3) * 2,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
  favIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(256,256,256,0.5)',
    margin: 20,
    borderRadius: 10,
    opacity: 0.6,
  },
  containerTitlePrice: {
    flexDirection: 'row',
    height: 30,
    width: width - 20,
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItem: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: 'orange',
  },
  containerBrand: {
    flexDirection: 'row',
    height: 50,
    width: width - 20,
    // backgroundColor: 'white',
    marginTop: 10,
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItem: 'center',
  },
  brand: {
    color: 'orange',
    backgroundColor: '#f9eee8',
    padding: 5,
    margin: 5,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: '800',
  },
});
