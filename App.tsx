/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


function App(): JSX.Element {
  const [name, setName] = useState("Rohit")

  function handlePress() {
    name === "Rohit" ? setName("User") : setName("Rohit")
    // console.warn("someone pressed me")

  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Hello {name}</Text>
      <Text style={{ color: "#0000ff", fontSize: 20 }}>This app is created by Rohit Nandagawali</Text>
      <Button title='Change name' onPress={handlePress}></Button>

      <User name="Rohit" age={50}/>
    </View>
  );
}
type data={
  name:String,
  age:Number
}
const User = (props:data) => {
  return (

    <View style={{ backgroundColor: "pink", padding: 5, margin: 5 }}>
      <Text>Name : { props.name}</Text>
      
    </View>
  )
}

export default App;
