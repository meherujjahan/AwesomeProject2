import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
   'antonio':require("./assets/fonts/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8BtIY2DwSXlM.ttf"),
   'spartan':require("./assets/fonts/K2FyfZJVlfNNSEBXGb7TCI6oBjLz.ttf)
  });

if(!loaded){
  return( <Text> Font is working</Text> ) 
}

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"antonio", fontWeight:'bold'}}>
        hello world</Text>


      <Text style={{color:'black', fontWeight:'bold'}}>
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
