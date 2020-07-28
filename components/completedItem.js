import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CompletedItem({ pressHandler, item }) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text key={item.status==='done'} style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });
  