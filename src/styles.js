import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#121330',
    secondary: '#BDBDBD',
    error: '#f13a59',
    success: '#00B386',
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  addInput: {
    height: 50,
    width: 350,
    margin: 12,
    backgroundColor: theme.colors.secondary,
    // padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // textDecorationLine: 'line-through',
  },
  header: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  text: {
    color: theme.colors.primary,
  },
});
