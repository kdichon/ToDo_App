import {View, Text, Button} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

const ItemTodo = ({todo}) => {
  const delTask = () => {
    firestore().collection('Todo').doc(todo.id).delete();
  };

  const updTask = () => {
    firestore().collection('Todo').doc(todo.id).update({
      status: !todo.status,
    });
  };

  return (
    <View>
      {todo.status ? (
        <Text>{todo?.task}</Text>
      ) : (
        <Text style={{textDecorationLine: 'line-through'}}>{todo?.task}</Text>
      )}
      <Button title={todo.status ? 'À faire' : 'fait'} onPress={updTask} />
      <Button title="Suppr" onPress={delTask} />
    </View>
  );
};

export default ItemTodo;
