import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/text/planet-header'
import { colors } from '../theme/color'

export default function Home() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: colors.black }}>
     <PlanetHeader/>
    </SafeAreaView>
  )
}