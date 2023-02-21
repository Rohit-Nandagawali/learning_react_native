
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator()
function App(): JSX.Element {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const Home = (props:any) => {
  return ( 
    <View style={Internalstyles.center}>
      <Text style={Internalstyles.text}>Home Screen</Text>
      <Button  title='Go to Login' onPress={()=>props.navigation.navigate("Login")}/>
    </View>
   );
}

const Login = () => {
  return ( 
    <View style={Internalstyles.center}>
      <Text style={Internalstyles.text}>Login Screen</Text>
    </View>
   );
}


// defining Internal styling using StyleSheet.create()
const Internalstyles = StyleSheet.create({
  
  text: {
   
    padding: 10,
    borderRadius: 10,
    fontSize:30,
    margin:20,

  },
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
  

})
export default App;
