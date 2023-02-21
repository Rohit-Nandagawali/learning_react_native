
import React, { useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable
} from 'react-native';



function App(): JSX.Element {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [display, setDisplay] = useState(false)

  const handleClear=()=>{
    setDisplay(false)
    setName("")
    setPassword("")
    setEmail("")
  }

  return (
    <View >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, alignSelf: 'center' }}>Enter Your data</Text>
      <TextInput
        style={Internalstyles.TextInput}
        value={name}
        placeholder='Enter Your Name'
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={Internalstyles.TextInput}
        value={password}
        secureTextEntry={true}
        placeholder='Enter Password'
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={Internalstyles.TextInput}
        value={email}
        placeholder='Enter email'
        onChangeText={(text) => setEmail(text)}
      />

      <Pressable style={[Internalstyles.Button]} onPress={() => {setName("") ;setDisplay(true)}}>
        <Text style={{ fontSize: 20, color: "white", fontFamily: "Roboto", }}>Submit</Text>
      </Pressable>

      <Pressable style={[Internalstyles.Button, { backgroundColor: "red" }]} onPress={handleClear}>
        <Text style={{ fontSize: 20, color: "white", fontFamily: "Roboto", }}>Clear</Text>
      </Pressable>

      {display ?
        <View>
          <Text style={{ fontSize: 20 }}>
            Your name is {name},
            Your password is {password},
            Your email is {email}
          </Text>
        </View> : null
      }


      {/* there is no style property to <Button> use <Presseble> */}
      {/* <Button 
      title='Clear'
      onPress={()=>setName("")}/> */}

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
