import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';

const PlanetItem = ({name , color})=>{
  const navigation = useNavigation();
  return(
    <Pressable onPress={()=>{
      navigation.navigate("Details", {planet:item})
          }} style={styles.item}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={[styles.circle, {backgroundColor:color}]}/>
            <Text preset='h4' style={styles.itemName}>  {name}</Text>
          </View>
            <AntDesign name="right" size={18} color="white" />
            </Pressable>
  )
}
export default function Home({ navigation}) {
  const renderItem = ({item})=>{
    const {name, color}= item;
    return(
    <PlanetItem name={name} color ={color}/> 
    )
  }  

  return (
    <SafeAreaView style={styles.container}>
     <PlanetHeader/>
     <FlatList
     contentContainerStyle={styles.list}
     keyExtractor={(item)=> item.name}
     data={PLANET_LIST}
     renderItem={renderItem}
    
     ItemSeparatorComponent={()=> <View style={styles.separator}></View>}
     />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, 
    },
    list:{
      padding:spacing[4],
    },
    itemName:{
      textTransform:"uppercase",
      marginLeft:spacing[3],
    },
    circle:{
      width:28,
      height:28,
      borderRadius:15,
    },
    item:{
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between",
     padding:spacing[3],
    },
    separator:{
      borderBottomColor:colors.white,
      borderBottomWidth:0.2,
    }
})