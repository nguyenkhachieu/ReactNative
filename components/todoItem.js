import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';

export default function TodoItem({ item, pressHandle }) {
    
    return (
        <TouchableOpacity onPress={() => pressHandle(item.id)}>
            <Text style={styles.item}>
               {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
});