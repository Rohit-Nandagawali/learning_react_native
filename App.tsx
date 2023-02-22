
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
  TextInput,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator()
function App(): JSX.Element {

  const handlePress = ()=>{
    console.warn("Button pressed");
    
  }

  return (
   <NavigationContainer>
    <Stack.Navigator  screenOptions={{
       
        headerStyle:{
          backgroundColor:"pink",
        },
        headerTintColor:"blue"
        ,
        headerTitleStyle:{
          fontSize:20
        }
      }}>
      <Stack.Screen name='Home' component={Home} 
     options={{
       headerTitle:()=><Button onPress={handlePress} title='Left'/>,
       headerRight:()=><Custom/>,
      headerStyle:{
        backgroundColor:"lightblue",
      },
      headerTintColor:"blue"
      ,
      headerTitleStyle:{
        fontSize:30
      }
    }}
      />
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const Custom = () => {
  return ( 
    <View>
      <TextInput placeholder='Input Name'/>
    </View>
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
