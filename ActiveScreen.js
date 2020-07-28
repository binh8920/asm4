import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CompletedItem from './components/completedItem';
import HeaderActive from './components/header2';
import { Foundation } from '@expo/vector-icons'; 
function CompletedScreen() {
  const [todos, setTodos] = useState([
    { text: 'learn react native', key: '5', status: 'done' },
    { text: 'design to-do app', key: '6', status: 'active' },
  ]);
  
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderActive/>
        <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
        <Foundation name="x" size={40} color="red" style={{marginRight: 10}}/>
          <Text style={{fontSize: 18, color: 'lightslategrey', marginTop: 5}}>Do these tasks!</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              key={todos.status=='done'}
              renderItem={({ item }) => (
                <CompletedItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
export default CompletedScreen;