import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from './text'


export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h2'>The Planets</Text>
    </View>
  )
}
const styles = StyleSheet.create(
    container: {

    }
)