import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function TelaInicial({navigation}) {
  
  return (
    <ImageBackground
      source={require('../../assets/HomePage.png')}
      style={styles.container}
    >
      <Text style={styles.textoPrincipal}>Pequisar por...</Text>

      <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn} 
              onPress={()=>navigation.navigate("TelaResultado",{escolha:'gifs'})}
          >
            <Text style={styles.textBtn}>Gifs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}
              onPress={()=>navigation.navigate("TelaResultado",{escolha:'stickers'})}
          >
            <Text style={styles.textBtn}>Stickers</Text>
          </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  btn:{
    width:100,
    height:50,
    borderRadius:10,
    backgroundColor:'white',
    margin:10,
    justifyContent:'center',
    alignItems:'center'
  },
  textBtn:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
  }
});
