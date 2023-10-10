import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Todo from './src/Todo';
import {PaperProvider} from 'react-native-paper';
import Tuto from './Tuto/Tuto';
import Leboncoin from './Tuto/leboncoin/Leboncoin';

const App = () => {
  return (
    <PaperProvider>
      <React.Fragment>
        {Platform.OS === 'web' ? (
          <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}
        {/* <Todo /> */}
        <Leboncoin />
      </React.Fragment>
    </PaperProvider>
  );
};

export default App;
