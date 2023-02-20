/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


function App(): JSX.Element {
  function handlePress() {
      console.warn("someone pressed me")
      
  }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:40,fontWeight:'bold' }}>Hello World !</Text>
      <Text style={{color:"#0000ff", fontSize:20}}>This app is created by Rohit Nandagawali</Text>
      <Button title='Press Me' onPress={handlePress}></Button>
    </View>
  );
}


export default App;
