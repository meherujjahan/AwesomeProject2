import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import Text from '../components/text/text';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';

export default function Details({navigation, route}) {
  const planet = route.params.planet;
const {name, description}= planet;
  // const renderImage = (name)=>{
  //   switch(name{
  //     case 'mercury'
  //   })
  // }

  return (
    <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <ScrollView>
      {/* <View style={styles.imageView}></View> */}
      <View>
      <Text preset='h1' style={styles.name}>
{name}
      </Text>
      <Text style={styles.details}>
{description}
      </Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, 
    },
    imageView:{
      padding:spacing[5],
      alignItems:'center',
    
    },
    name:{
      textTransform:"uppercase",
      alignItems:'center',
      marginTop:spacing[5],
      margin:'auto',
    },
    details:{
      lineHeight:21,
      marginTop:spacing[5],
      marginHorizontal:spacing[5],
      alignItems:'center'
    }
  
})