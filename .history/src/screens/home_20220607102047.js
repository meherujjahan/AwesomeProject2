import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native-safe-area-context'
import PlanetHeader from '../components/text/planet-header'
import { colors } from '../theme/color'

export default function Home() {
  return (
    <SafeAreaView style={{ }}>
     <PlanetHeader/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, border, borderBottomWidth:0.2, borderBottomColor:colors.white,
    }
})