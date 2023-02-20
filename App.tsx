/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <View>
      <Text style={{fontSize:40,fontWeight:'bold' }}>Hello World !</Text>
      <Text style={{color:"#0000ff", fontSize:20}}>This app is created by Rohit Nandagawali</Text>
    </View>
  );
}


export default App;
