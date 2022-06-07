import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import PlanetHeader from '../components/text/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
    <PlanetHeader/>
      <Text>Details</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, 
    },
  
})