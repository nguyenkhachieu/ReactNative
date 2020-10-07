import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', id: '1'},
    {text: 'ronaldo', id: '2'},
    {text: 'ronaldo1', id: '3'},
  ])
  const pressHandle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.id !== id)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            numColumns={1}
            keyExtractor={(item) => item.id}
            data={todos}
            horizontal={false}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandle={pressHandle} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20
  },
  list: {
    margin: 30
  }
});