import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Todo from './src/Todo';
import {PaperProvider} from 'react-native-paper';
import Tuto from './Tuto/Tuto';
import Leboncoin from './Tuto/leboncoin/Leboncoin';
import {theme} from './src/styles';
import Templates from './src/Templates';
import Authapp from './Tuto/authapp/AuthApp';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Authapp />
      {/* <Leboncoin /> */}
    </PaperProvider>
  );
};

export default App;
