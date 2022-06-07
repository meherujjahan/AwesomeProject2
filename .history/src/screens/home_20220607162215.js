import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/color';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
     <PlanetHeader/>
     <FlatList
     data={PLANET_LIST}
     renderItem={({item, index})=>{
       return(
         <View>
           <Text>  {item.name}</Text>
         
           </View>
       )
     }}
     />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, 
    }
})