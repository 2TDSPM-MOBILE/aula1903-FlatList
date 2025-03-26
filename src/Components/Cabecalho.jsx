import { View,TextInput,StyleSheet } from "react-native"
import {Ionicons} from 'react-native-vector-icons'

export default function Cabecalho({text,setText,navigation,solicitarDados}) {
    return (
        <View style={styles.cabecalho}>
            <Ionicons
                name="chevron-back"
                size={40}
                color="white"
                onPress={() => navigation.goBack()}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Digite sua pesquisa'
                autoCapitalize='none'
                autoCorrect={false}
                value={text}
                onChangeText={(value) => setText(value)}
                onSubmitEditing={() => solicitarDados(text)}
            />
            <Ionicons
                name="search"
                size={40}
                color='white'
                onPress={() => solicitarDados(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
  }
});