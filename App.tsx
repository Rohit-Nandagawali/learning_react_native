
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
       headerTitle:()=><Button  title='Left'/>,
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
  const name="rohitt"
  const age=19
  return ( 
    <View style={Internalstyles.center}>
      <Text style={Internalstyles.text}>Home Screen</Text>
      <Button  title='Go to Login' onPress={()=>props.navigation.navigate("Login",{name,age})}/>
    </View>
   );
}

const Login = (props:any) => {
  const {name,age}=props.route.params
  return ( 
    <View style={Internalstyles.center}>
      <Text style={Internalstyles.text}>Login Screen</Text>
      <Text style={Internalstyles.text}>{name} </Text>
      <Text style={Internalstyles.text}>{age} </Text>
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
