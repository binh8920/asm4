import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CompletedItem from './components/completedItem';
import HeaderCompleted from './components/header1';
import { MaterialIcons } from '@expo/vector-icons'; 
function CompletedScreen() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1', status: 'done'},
    { text: 'create an app', key: '2', status: 'active' },
    { text: 'learn english', key: '3', status: 'done' },
    { text: 'read books', key: '4', status: 'active' },
  ]);
  
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderCompleted />
        <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
          <MaterialIcons name="done" size={40} color="lawngreen" style={{marginRight: 10}}/>
          <Text style={{fontSize: 18, color: 'lightslategrey', marginTop: 5}}>Your tasks you have done!</Text>
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