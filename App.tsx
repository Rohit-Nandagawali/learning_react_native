
import React, { useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList
} from 'react-native';



function App(): JSX.Element {

  const userData=[
    {
      id:1,
      name:"rohit"
    },
    {
      id:2,
      name:"mohit"
    },
    {
      id:3,
      name:"gaurav"
    },
    {
      id:4,
      name:"saurav"
    },
  ]

  return (
    <View >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, alignSelf: 'center' }}>FlateList</Text>
      <FlatList
        data={userData}
        renderItem={items=><Text style={Internalstyles.Button}>{items.item.name}</Text>}
        keyExtractor={item=>item.name}
        />
    
    </View>
  );
}


// defining Internal styling using StyleSheet.create()
const Internalstyles = StyleSheet.create({
  TextInput: {
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "green"
  }
  ,
  Button: {
    color: "white",
    fontSize: 20,
    padding: 15,
    margin: 10,
    backgroundColor: "green",
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    borderColor: "green",

  },

})
export default App;
