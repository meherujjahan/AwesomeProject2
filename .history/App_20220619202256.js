import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Text from './src/components/text/text';
import Details from './src/screens/details';
import Home from './src/screens/home';



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
   <>
       <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

});
