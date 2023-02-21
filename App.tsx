
import React, { useEffect, useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Button,
  Pressable,
  StatusBar,

} from 'react-native';



function App(): JSX.Element {
  return (
    <View >
     <StatusBar
     backgroundColor={"red"}
     barStyle="light-content"
     hidden={true}
     />


    </View>
  );
}



// defining Internal styling using StyleSheet.create()
const Internalstyles = StyleSheet.create({
  
  btn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    shadowColor: "blue",
    elevation: 20,
    margin:20,

  },
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
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    borderColor: "green",
    shadowColor: "red",
    elevation: 20,
    shadowOpacity: 4


  },

})
export default App;
