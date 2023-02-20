
import React, { useState } from 'react';
// importing external styling 
import externalStyle from './externalStyle';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';


function App(): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center"}}>
      {/* inline styling */}
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Inline Styles</Text>

      {/* Internal Styling */}
      <Text style={Internalstyles.textBox}>Internal Styles</Text>

      {/* External Styling */}
      <Text style={externalStyle.textBox}>External Styles</Text>
     
      {/* internal + external + inline styling */}
      <Text style={[Internalstyles.textBox,externalStyle.textBox,{backgroundColor:"green",borderStyle:"solid",borderColor:"red",borderWidth:5}]}>hybrid Styles</Text>
    </View>
  );
}


// defining Internal styling using StyleSheet.create()
const Internalstyles=StyleSheet.create({
  textBox:{
    color:"white",
    backgroundColor:"blue",
    fontSize:30,
    fontFamily:"Roboto",
    padding:15,
    margin:10,
    borderRadius:20,
  }
  
})
export default App;
