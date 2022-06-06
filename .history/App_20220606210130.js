import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
   'Antonio':require("./assets/fonts/Antonio-Regular.ttf"),
  "Spartan-bold":require("./assets/fonts/Spartan-Bold.ttf")''
  "Spartan-regular":require("./assets/fonts/Spartan-Regular.ttf")
  });

if(!loaded){
  return( <Text>Font is working</Text> ) 
}

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"Antonio"}}>
        hello world</Text>


      <Text style={{color:'black', fontFamily:"spartan",}}>
        here i use font family...is it working?????</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'white',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
