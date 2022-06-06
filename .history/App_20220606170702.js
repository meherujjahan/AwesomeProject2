import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
   'Antonio':require("./assets/fonts/Antonio.ttf"),
  "spartan":require("./assets/fonts/spartan.ttf")
  });

if(!loaded){
  return( <Text>Font is working</Text> ) 
}

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"Antonio"}}>
        hello world</Text>


      <Text style={{color:'black', fontFamily:"spartan", fontWeight:"900"}}>
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
