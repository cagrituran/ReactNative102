/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.powderblue}></View>
            <View style={styles.skyblue}></View>
            <View style={styles.steelblue}></View>
        </View>
      );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    powderblue:{
        flex:1,
        backgroundColor:'powderblue',
    },
    skyblue:{
        flex:2,
        backgroundColor:'skyblue',
    },
    steelblue:{
        flex:3,
        backgroundColor:'steelblue',
    },
});

