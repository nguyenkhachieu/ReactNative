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

export default function App1() {
  const [name, setName] = useState('Hieu');
  const [people, setPeople] = useState([
    {name: 'kaka', id: '1'},
    {name: 'ronaldo', id: '2'},
    {name: 'ronaldo1', id: '3'},
    {name: 'ronaldo2', id: '4'},
    {name: 'ronaldo3', id: '5'}
  ])


  const onChangeName = () => {
    setName('haha')
  }
  const pressHandler = (id) => {
    console.log(id)
  }
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={onChangeName}></Button>
      </View>
      <View>
        <Text>Enter Name</Text>
        <TextInput style={styles.input} onChangeText={(val) => setName(val)} />
      </View>
      {/* {
        people && people.map(item => {
          return (
            <View key={item.id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })
      } */}
      {/* </ScrollView> */}
      {/* ScrollView and FlatList the same */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    backgroundColor: 'pink',
    fontSize: 24,
    padding: 30,
    margin: 10
  }
});
