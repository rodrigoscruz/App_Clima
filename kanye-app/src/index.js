import React from 'react';
import { View, Text, Button, Image , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
  const navigation = useNavigation();

  

  function irSobre(){
      navigation.navigate('Sobre');
  }

  function irKanye(){
      navigation.navigate('Kanye');
  }

  function irTop(){
      navigation.navigate('Top');
  }


  return(
    <View style={styles.container}>
      <Text style={styles.titulo} >Bem vindo ao Kanye App</Text>
      <Button
      title="Receber concelhos"
      onPress={irKanye}
      />

      <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDfTGJuenkPwyxuD4YpCv2vyXU2DaupOMLOq2I3NUg_9cGq88XaTkCcd_2P0MdpDvB9I&usqp=CAU'}}
          style={{ width: 300, height: 500, alignSelf:'center', padding: 20, margin: 20}}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
   titulo:{
    paddingBottom: 20,
    fontSize: 30,
    textAlign: 'center'
  },
});