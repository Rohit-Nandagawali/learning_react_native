
import React, { useEffect, useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  
} from 'react-native';



function App(): JSX.Element {
 
  return (
    <View >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, alignSelf: 'center' }}>TouchableHighlight</Text>
      
      <TouchableHighlight style={Internalstyles.Button}>
        <Text>Primary</Text>
      </TouchableHighlight>

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
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    borderColor: "green",
    shadowColor:"red",
    elevation:20,
    shadowOpacity:4
    

  },

})
export default App;
