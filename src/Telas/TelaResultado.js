import { use, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, FlatList, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import API_KEY from '../API_KEY';
import axios from 'axios';
import Cabecalho from '../Components/Cabecalho';
import {Ionicons} from "react-native-vector-icons"
import TextoInfo from '../Components/TextInfo';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

const { width, height } = Dimensions.get("window")
const IMAGE_WIDTH = width

export default function TelaResultado({ route, navigation }) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search`

  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [showMessage,setShowMessage]=useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const [showError,setShowError] = useState(false)

  const solicitarDados = async (text) => {
    Keyboard.dismiss()
    setIsLoading(true)
    try {
      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text
        }
      })
      //console.log(resultado.data.data.images)
      setShowMessage(false)
      setData(resultado.data.data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setShowMessage(false)
      setIsLoading(false)
      setShowError(true)
      alert("Estamos com problemas para carregar os dados!")
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
        ListHeaderComponent={
          <>
            <TextoInfo showMessage={showMessage}/>
            <Loading isLoading={isLoading}/>
            <Error showError={showError}/>
          </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("TelaDetalhes",{item:item})}>
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
    borderRadius:10,
    width: IMAGE_WIDTH/2.3,
    height: IMAGE_WIDTH/2.3,
    margin:IMAGE_WIDTH*0.03,
   
  }
});
