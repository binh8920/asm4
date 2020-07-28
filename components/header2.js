import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderActive() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Active tasks</Text>
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