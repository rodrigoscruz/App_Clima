import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Sobre({ route }) {
 const navigation = useNavigation();


 return (
   <View style={styles.container}>
     
    <Text style={styles.titulo}>Kanye App</Text>
    <Text >Bem vindo ao aplicativo que lhe fornece o saber.</Text>
    <Text style={styles.texto}>Aqui é o lugar onde você encontrara a verdade, o conhecimento e a paz</Text>
      
    <Button style={marginTop=10}
     title="Pergunte ao Kanye"
     onPress={ () => navigation.navigate('Kanye') }
     />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
   titulo:{
    marginTop: 1,
    paddingBottom: 50,
    fontSize: 30,
    textAlign: 'center'
  },
  texto:{
    paddingBottom: 50,
    textAlign: 'center'
  },
});