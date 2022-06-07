import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlanetHeader from '../components/text/planet-header';
import { colors } from '../theme/color';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
     <PlanetHeader/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1, backgroundColor: colors.black, borderBottomWidth:0.2, borderBottomColor:colors.white,
    }
})