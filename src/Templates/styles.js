import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../styles';
import CardProduct from './components/CardProduct';

const {width, heigth} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    // padding: 5,
    // backgroundColor: theme.colors.success,
  },
  header: {
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    width: width - 20,
    margin: 5,
  },
  menu: {
    backgroundColor: theme.colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderColor: 'black',
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  homeTitle: {
    // backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    width: width - 20,
    margin: 5,
  },
  fontTitle: {fontSize: 25, fontWeight: '900'},
  searchBar: {
    borderRadius: 20,
    // borderBlockColor: 'black',
    // backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    width: width - 20,
    margin: 5,
    padding: 10,
  },
  categoryScroll: {
    margin: 5,
    alignItems: 'center',
  },
  itemCategoryScroll: {
    height: 45,
    paddingHorizontal: 5,
  },
  textCategoryScroll: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '700',
    borderColor: '#000',
    borderRadius: 15,
  },
  CardView: {
    height: width / 3,
    width: width - 20,
    padding: 5,
  },
  CardViewProduct: {
    height: ((width / 2 - 20) / 3) * 4,
    width: width / 2,
  },
  cardImage: {
    width: width / 2 - 20,
    height: (width / 2 - 20) / 2,
    borderRadius: 20,
  },
  sidePopular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    margin: 5,
  },
  CardViewPopular: {
    height: ((width / 2 - 20) / 3) * 2,
    width: width / 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  favIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(256,256,256,0.5)',
    margin: 20,
    borderRadius: 10,
    opacity: 0.6,
  },
});
