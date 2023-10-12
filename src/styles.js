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
    lightColorElastic: '#f8e4d9',
    colorElastic: '#fcf1ea',
    darkColorElastic: '#fac5a4',
    lightColorRunning: '#d7f0f7',
    colorRunning: '#e8f7fc',
    darkColorRunning: '#aceafc',
    lightColorWeight: '#dad5fe',
    colorWeight: '#e7e3ff',
    darkColorWeight: '#8860a2',
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
