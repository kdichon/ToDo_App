import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import ItemTodo from './ItemTodo';

const ListTodo = () => {
  /****
   * Initialisation des States
   * => todos & loading
   *****/
  // initialisation des datas
  const [todos, setTodos] = useState([]);
  //   initialisation du loading
  const [loading, setLoading] = useState(true);

  //   Au chargement du composant
  useEffect(() => {
    console.log('Lister');
    firestore()
      .collection('Todo')
      .onSnapshot(querySnapshot => {
        console.log('querySnapshot ->', querySnapshot);
        // Initialissation du tableau de récupération
        const dataTodos = [];
        // Lecture de document "doc" par document "doc"
        querySnapshot.forEach(doc => {
          // visualisation des datas du query
          //   console.log(doc.data());
          dataTodos.push({
            id: doc.id,
            ...doc.data(),
          });
          setTodos(dataTodos);
        });
        // Pour arrêter la consultation du querySnapshot
        loading && setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : (
        <FlatList
          data={todos}
          renderItem={({item}) => <ItemTodo todo={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ListTodo;
