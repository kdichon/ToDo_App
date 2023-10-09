import {View, Text} from 'react-native';
import React from 'react';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

const Todo = () => {
  return (
    <View>
      {/* <Text>Todo</Text> */}
      <AddTodo />
      <ListTodo />
    </View>
  );
};

export default Todo;
