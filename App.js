import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

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

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text, id: Math.random().toString()},
          ...prevTodos,
        ]
      }) 
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood'}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
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
    </TouchableWithoutFeedback>
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