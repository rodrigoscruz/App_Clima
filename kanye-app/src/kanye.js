import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import api from './services/api'

export default function Kanye(){
  const [ken, setKen] = useState()
  const [kenye, setEndereco] = useState([])


  const chamaKen = async (ken) => {
    const response = await api.get('https://api.kanye.rest/');
    setEndereco(response.data)
  }


    return(
      <View style={styles.container}>
      

        <Button title="  Frases  " onPress={() => chamaKen(ken)} />

        <Text style={styles.kenye}>{kenye.quote}</Text>
      </View>    
    )
  }

  const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
   kenye:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
});