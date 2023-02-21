
import React, { useEffect, useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  Button
} from 'react-native';



function App(): JSX.Element {

  const [count, setCount]=useState(0)
  useEffect(()=>{
    console.warn("useEffect called"); //on state change
    
  },[]) //use [] to call only at componentDidMount
  return (
    <View >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, alignSelf: 'center' }}>useEffect count {count}</Text>
      
      <Button title='Count' onPress={()=>setCount(count+1) }></Button>
    
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
