
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
  
} from 'react-native';



function App(): JSX.Element {
  const [show, setShow]=useState(false)
  return (
    <View style={Internalstyles.main}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, alignSelf: 'center' }}>TouchableHighlight</Text>
      <Modal 
      transparent={true}
      visible={show}
      animationType="slide"
       >
        <View style={Internalstyles.centerView}>
          <View style={Internalstyles.modalView}>
            <Text style={{fontSize:30,marginBottom:10}}>
              This is modal
            </Text>
            <Button onPress={()=>setShow(false)} title='Close'></Button>
          </View>
        </View>
      </Modal>
      
      <TouchableHighlight onPress={()=>setShow(true)} style={Internalstyles.Button}>
        <Text>Press</Text>
      </TouchableHighlight>


    </View>
  );
}

 

// defining Internal styling using StyleSheet.create()
const Internalstyles = StyleSheet.create({
  main:{
    flex:1,
    
  },
  centerView:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
    
  },
  modalView:{
    backgroundColor:"white",
    padding:40,
    borderRadius:10,
    shadowColor:"blue",
    elevation:20,

  },
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
