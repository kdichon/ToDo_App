import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-paper';
// import FontAwesome from 'react-native-vector-icons/FontAwesome6';

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
        style={styles.addInput}
        value={task}
        placeholder="Add a task"
        onChangeText={text => setTask(text)}
        onSubmitEditing={value => send(value.nativeEvent.text)}
        right={<TextInput.Icon icon="add" />}
      />
    </View>
  );
};

export default AddTodo;
