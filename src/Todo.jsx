import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import Header from './components/Header';

const Todo = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Todo</Text> */}
      <Header />
      <AddTodo />
      <ListTodo />
    </View>
  );
};

export default Todo;
