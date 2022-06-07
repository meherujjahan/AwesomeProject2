import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Text from './src/components/text/text';
import Home from './src/screens/home';
import { colors } from './src/theme/color';



export default function App() {

  const [loaded] = useFonts({
   'Antonio':require("./assets/fonts/Antonio-Regular.ttf"),
  "Spartan-bold":require("./assets/fonts/Spartan-Bold.ttf"),
  "Spartan-regular":require("./assets/fonts/Spartan-Regular.ttf"),
  });

if(!loaded){
  return( <Text>Font is working</Text> ) 
}

//navigation system
const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
       <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'white',
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
