import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../theme/color'
import { spacing } from '../../theme/spacing'
import Text from './text'


export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h2'>The Planets</Text>
    </View>
  )
}
const styles = StyleSheet.create(
   {
    container: {
        padding:  spacing[6],
        borderBottomWidth:0.2, borderBottomColor:colors.white,
            }
   }
)