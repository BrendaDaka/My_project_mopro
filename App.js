import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Greeting from './src/components/Greeting';
import Header from './src/components/Header';
import HeaderKedua from './src/components/HeaderKedua';
import Indonesia from './src/components/Indonesia';
import Global from './src/components/Global';

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.box1}><Header/></View>
      <View style={styles.box2}><HeaderKedua/><Global/></View>
      <View style={styles.box3}><Greeting/><Indonesia/></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box1: {
    flex: 3,
    //width: 50,
    //height: 50,
    backgroundColor: 'lightcyan'
  },
  box2: {
    flex: 7,
    //width: 50,
    //height: 50,
    backgroundColor: 'lightcyan'
  },
  box3: {
    flex: 12,
    //width: 50,
    //height: 50,
    backgroundColor: 'lightcyan'
  },
});

export default App;