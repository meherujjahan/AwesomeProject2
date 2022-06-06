import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';


export default function Text( {children, preset="default", style}) {

    const textStyles = StyleSheet.compose(presets[preset], style)

  return (
   
      <RNText>{
          children}
      </RNText>
   
  )
}