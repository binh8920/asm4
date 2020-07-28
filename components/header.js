import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderAll() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To-do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'lightsalmon',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});