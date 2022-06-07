import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  return (
    <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <ScrollView>
      <View style={styles.imageView}></View>
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
      justifyContent:'center',
    }
  
})