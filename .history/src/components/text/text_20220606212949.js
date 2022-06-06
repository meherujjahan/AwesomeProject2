import React from 'react'
import { Text as RNText } from 'react-native'


export default function Text( Children) {
  return (
   
      <RNText>{
          Children}
      </RNText>
   
  )
}