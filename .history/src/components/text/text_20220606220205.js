import React from 'react'
import { Text as RNText } from 'react-native'
import { StyleSheet } from 'react-native-web'


export default function Text( {children, preset="default", style}) {

    const textStyles = StyleSheet.compose(presets[preset], style)

  return (
   
      <RNText>{
          children}
      </RNText>
   
  )
}