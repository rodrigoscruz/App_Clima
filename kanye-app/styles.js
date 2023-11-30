import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  backg:{
    margin: 5,
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 50,
    paddingBottom: 50,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#efe',
  },

  titulo:{
    fontSize: 42,
    color:'blue',
    marginTop: 55,
    marginBottom: 20,
    textAlign: 'center',
  },

  container:{
    flex: 1
  },

  areaPessoa:{
    backgroundColor: '#efefef',
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 5,
    height: 200,
    marginBottom: 15,
    padding: 10,
    paddingTop: 30
  },

  texto:{
    fontSize: 20,
    color:'blue',
  },

  textoPessoa:{
    color: '#222',
    fontSize: 20
  },

  box:{
    backgroundColor: '#eff',
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 5,
    height: 320,
    width: 200,
    margin: 20,
    marginRight: 5,
    marginLeft: 5
  },
})

export {styles}