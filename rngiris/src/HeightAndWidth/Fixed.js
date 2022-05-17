/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';


export default class Fixed extends Component {
  render() {
    return (
      <View>
          <View style={styles.powderblue}></View>
          <View style={styles.skyblue}></View>
          <View style={styles.steelblue}></View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    powderblue:{
        width:100,
        height:100,
        backgroundColor:'powderblue',
    },
    skyblue:{
        width:200,
        height:200,
        backgroundColor:'skyblue',
    },
    steelblue:{
        height:300,
        backgroundColor:'steelblue',
    },
});
