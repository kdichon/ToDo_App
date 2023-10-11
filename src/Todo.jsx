import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

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
