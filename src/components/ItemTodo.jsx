import {View, Text, Button, ImageBackground} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {theme} from '../styles';
import tutoStyles from '../../Tuto/tutoStyles';

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
    <View style={tutoStyles.container}>
      <View style={tutoStyles.frameCard}>
        <ImageBackground
          source={require('./../assets/logo-og.png')}
          resizeMode="cover"
          style={tutoStyles.image}>
          {todo.status ? (
            <Text>{todo?.task}</Text>
          ) : (
            <Text style={{textDecorationLine: 'line-through'}}>
              {todo?.task}
            </Text>
          )}
          <View style={tutoStyles.box2}>
            {/* Modification du status de la task */}
            <Button
              title={todo.status ? 'À faire' : 'fait'}
              onPress={updTask}
            />
          </View>
          <View style={tutoStyles.box3}>
            {/* Suppression de la task */}
            <Button title="Suppr" onPress={delTask} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ItemTodo;
