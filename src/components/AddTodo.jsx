import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {sytles} from '../styles';
import firestore from '@react-native-firebase/firestore';

const AddTodo = () => {
  const [task, setTask] = useState('');

  const send = value => {
    console.log('send', value);
    firestore().collection('Todo').add({
      task: value,
      status: false,
      dateIns: Date.now(),
    });
    // Efface le champ texte de l'input
    setTask('');
  };

  return (
    <View>
      <TextInput
        style={sytles.addInput}
        value={task}
        onChangeText={text => setTask(text)}
        onSubmitEditing={value => send(value.nativeEvent.text)}
      />
    </View>
  );
};

export default AddTodo;
