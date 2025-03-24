import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, FlatList, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import API_KEY from '../API_KEY';
import axios from 'axios';
import Cabecalho from '../Components/Cabecalho';

const { width, height } = Dimensions.get("window")
const IMAGE_WIDTH = width

export default function TelaResultado({ route, navigation }) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search`

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const solicitarDados = async (text) => {
    Keyboard.dismiss()
    try {
      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text
        }
      })
      //console.log(resultado.data.data.images)
      setData(resultado.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
    >
      <Cabecalho
        navigation={navigation}
        text={text}
        setText={setText}
        solicitarDados={solicitarDados}
      />

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("TelaDetalhes")}>
              <Image
              style={styles.image}
              source={{ uri: item.images.preview_gif.url }}
              />
            </TouchableOpacity>
            
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
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  textInput: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    paddingLeft: 10
  },
  image: {
    width: IMAGE_WIDTH/2,
    height: IMAGE_WIDTH/2
  }
});
