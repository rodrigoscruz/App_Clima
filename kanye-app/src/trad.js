import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../styles';

function Tradu(){
  
  let img1 = 'https://img.freepik.com/fotos-premium/kettlebell-pesos-em-uma-academia-de-ginastica-em-preto-e-branco_216548-234.jpg';
  let img2 = 'https://img.r7.com/images/2016/06/08/4l69cszzm5_53aww2m2nk_file?dimensions=771x420&no_crop=true';
  let img3 = 'https://filmeseseries.org/wp-content/uploads/2022/10/Todo-Mundo-Odeia-o-Chris-golpe-baixo-1024x537.jpg';
  let img4 = 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/12/GettyImages-1205198865.jpg?w=1220&h=674&crop=1';
  let img5 = 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ba416fb13dfee1d75c0601f14eca94cc.jpg';

  let texto1 = 'A verdade é meu objetivo. A polêmica é minha academia. Farei cem repetições de controvérsia por um pacote de 6 verdades.';
  let texto2 = 'A polícia do pensamento quer suprimir a liberdade de pensamento.';
  let texto3 = 'Eu estava conversando com alguém que me contou a história de sua vida e que era morador de rua.';
  let texto4 = 'Todos nós somos autoconscientes. Eu sou apenas o primeiro a admitir isso.';
  let texto5 = 'Mantenha os quadrados fora do seu círculo';

  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Maravilhosas frases traduzidas</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <View style={styles.box}>
        <Image
          source={{ uri: img1 }}
          style={{ width: 80, height: 80, alignSelf:'center', margin: 20}}
        />
        <Text style={styles.texto}>{texto1}</Text>
        </View>
        <View style={styles.box}>
        <Image
          source={{ uri: img2 }}
          style={{ width: 80, height: 80, alignSelf:'center', margin: 20}}
        />
        <Text style={styles.texto}>{texto2}</Text>
        </View>
        <View style={styles.box}>
        <Image
          source={{ uri: img3 }}
          style={{ width: 80, height: 80, alignSelf:'center', margin: 20}}
        />
        <Text style={styles.texto}>{texto3}</Text>
        </View>
        <View style={styles.box}>
        <Image
          source={{ uri: img4 }}
          style={{ width: 80, height: 80, alignSelf:'center', margin: 20}}
        />
        <Text style={styles.texto}>{texto4}</Text>
        </View>
        <View style={styles.box}>
        <Image
          source={{ uri: img5 }}
          style={{ width: 80, height: 80, alignSelf:'center', margin: 20}}
        />
        <Text style={styles.texto}>{texto5}</Text>
        </View>

      </ScrollView>

    </View>
  )
}


export default Tradu;