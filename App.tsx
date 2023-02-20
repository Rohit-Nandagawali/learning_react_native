
import React, { useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Pressable
} from 'react-native';


function App(): JSX.Element {
  const [name,setName]=useState("")
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold',margin:10}}>Your Name is {name}</Text>
      <TextInput 
      style={Internalstyles.TextInput}
      value={name}
      placeholder='Enter Your name'
      onChangeText={(text)=>setName(text)}
      />

      <Pressable style={Internalstyles.Button} onPress={()=>setName("")}>
        <Text style={{fontSize:20}}>Clear</Text>
      </Pressable>

    {/* there is no style property to <Button> use <Presseble> */}
      {/* <Button 
      title='Clear'
      onPress={()=>setName("")}/> */}

    </View>
  );
}


// defining Internal styling using StyleSheet.create()
const Internalstyles=StyleSheet.create({
  TextInput:{
    color:"white",
    fontSize:20,
    fontFamily:"Roboto",
    padding:15,
    width:300,
    borderRadius:20,
    borderWidth:2,
    borderColor:"green"
  }
  ,
  Button:{
    color:"white",
    fontSize:25,
    fontFamily:"Roboto",
    padding:15,
    margin:10,
    backgroundColor:"green",
    borderRadius:20,
    alignItems:"center",
    textAlign:"center",
    borderColor:"green"
  }
  
})
export default App;
