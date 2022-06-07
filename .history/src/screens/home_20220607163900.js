import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
     <PlanetHeader/>
     <FlatList
     contentContainerStyle={styles.list}
     keyExtractor={(item, index)=> item.name}
     data={PLANET_LIST}
     renderItem={({item, index})=>{
       return(
         <View style={styles.item}>
           <View style={[styles.circle, {backgroundColor:item.color}]}/>
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
    list:{
      padding:spacing[5],
    },
    circle:{
      width:20,
      height:20,
      borderRadius:10,
    },
    item:{
     flexDirection:"row",
     alignItems:"center"
    }
})