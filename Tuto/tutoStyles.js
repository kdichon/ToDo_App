import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#121330',
    secondary: '#BDBDBD',
    thirth: '#7E4C35',
    error: '#f13a59',
    success: '#00B386',
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: theme.colors.success,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.secondary,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.thirth,
    justifyContent: 'center',
    alignContent: 'center',
  },
  exo: {
    backgroundColor: theme.colors.success,
    width: 300,
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameCard: {
    backgroundColor: 'yellow',
    height: 400,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
