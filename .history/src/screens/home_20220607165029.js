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
       const {name, color}= item;
       return(
         <View style={styles.item}>
           <View style={[styles.circle, {backgroundColor:color}]}/>
           <Text preset='h3' style={styles.itemName}>  {name}</Text>
         
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
    },
    list:{
      padding:spacing[5],
    },
    itemName:{
      textTransform:"uppercase",
      marginLeft:spacing[4],
    },
    circle:{
      width:30,
      height:30,
      borderRadius:15,
    },
    item:{
     flexDirection:"row",
     alignItems:"center",
     padding:spacing[4],
    }
})