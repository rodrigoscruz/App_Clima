import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { styles } from '../styles';


function Top(){


  let initial_feed = [
        {id: 1, titulo: 'Mensagens de cura', frase: 'We will heal. We will cure.'},
        {id: 2, titulo: 'Faça exercícios', frase: 'Truth is my goal. Controversy is my gym. I will do a hundred reps of controversy for a 6 pack of truth'},
        {id: 3, titulo: 'A favor de artes', frase: 'I am going to personally see to it that Taylor Swift gets her masters back. Scooter is a close family friend'},
        {id: 4, titulo: 'Frases políticas', frase: 'The thought police want to suppress freedom of thought'},
        {id: 5, titulo: 'Concientizar', frase: 'We came into a broken world. And we are the cleanup crew.'},
        {id: 6, titulo: 'Pensamentos filosóficas', frase: 'I was just speaking with someone that told me their life story and they used to be homeless.'},
        {id: 7, titulo: 'Sobre consciência', frase: 'We all self-conscious. I am just the first to admit it.'},
        {id: 8, titulo: 'O chamado', frase: 'If I do not scream, if I do not say something then no one is going to say anything.'},
        {id: 9, titulo: 'Geometria', frase: 'Keep squares out yo circle'},
        {id: 10, titulo: 'O grande conselho', frase: 'If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people do not appreciate the moment until it is passed.'},
      ]


  const [feed, setFeed] = useState(initial_feed)


  return(
    <View >

      <Text style={styles.titulo}>Top Frases</Text>

      <FlatList
      data={feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Frase data={item}/>}
      />
    </View>
  )
}


export default Top;


function Frase(props){
  return(
      <View style={styles.areaPessoa}>
        <Text style={styles.texto}>{props.data.titulo} </Text>
        <Text style={styles.textoPessoa}>Frase: {props.data.frase} </Text>
      </View>
  );
}
