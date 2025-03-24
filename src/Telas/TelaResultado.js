import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput, FlatList,Image } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import API_KEY from '../API_KEY';
import axios from 'axios';

export default function TelaResultado({route,navigation}) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search`
  
  const[text,setText] = useState('')
  const[data,setData] = useState([])

  const solicitarDados = async (text)=>{
    try{
      const resultado = await axios.get(link,{
        params:{
          api_key: API_KEY,
          q:text
        }
      })
      //console.log(resultado.data.data.images)
      setData(resultado.data.data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <ImageBackground 
      source={require('../../assets/BG.png')}
      style={styles.container}
    >
      <View style={styles.cabecalho}>
        <Ionicons 
          name="chevron-back" 
          size={40}
          color="white"  
          onPress={()=>navigation.goBack()}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Digite sua pesquisa'
          autoCapitalize='none'
          autoCorrect={false}
          value={text}
          onChangeText={(value)=>setText(value)}
        />
        <Ionicons 
          name="search"
          size={40}
          color='white'
          onPress={()=>solicitarDados(text)}
        />
      </View>


      <FlatList 
        data={data}
        renderItem={({item})=>{
          return(
            <Image
              style={styles.image}
              source={{uri: item.images.preview_gif.url}}
              
            />
            
            
          )
        }}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cabecalho:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30
  },
  textInput:{
    backgroundColor:"white",
    width:300,
    borderRadius:10,
    paddingLeft:10
  },
  image:{
    width:300,
    height:300
  }
});
