import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/Telas/TelaInicial";
import TelaResultado from "./src/Telas/TelaResultado";
import TelaDetalhes from "./src/Telas/TelaDetalhes";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="TelaResultado" component={TelaResultado} options={{headerShown:false}}/>
        <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
