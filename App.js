// React and React-native components
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
// Components
import AddItem from "./Components/AddItem";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";
// Dependendcies
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {

  const [items, setItems] = useState([
  //Dummy Data
    { id: Math.floor(Math.random() * 255), text: 'milk' },
    { id: Math.floor(Math.random() * 255), text: 'meat' },
    { id: Math.floor(Math.random() * 255), text: 'egg' },
    { id: Math.floor(Math.random() * 255), text: 'bread' },
    { id: Math.floor(Math.random() * 255), text: 'chocolate' },
  ]
  )

  // It is passed as props to ListItem component
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  // It is passed as props to AddItem Component
  const addItem = (newItemText) => {
    if (!newItemText) {
      // If user doesn't input anything it warns them
      Alert.alert("Error", "Please enter a item")
    }
    else
    {
      setItems((prevItems) => {
        return [...prevItems, {id: Math.floor(Math.random() * 255), text: newItemText}]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={(item) => addItem(item)} />
      <FlatList
        data={items}
        renderItem={
          ({ item }) => {
            return (
              <ListItem item={item} deleteItem={deleteItem}/>
            )
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
