/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style = {styles.powderblue} ></View>
            <View style = {styles.skyblue} ></View>
            <View style = {styles.steelblue} ></View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        //flexDirection:'column',
        justifyContent:'space-around',
    },
    powderblue:{
        width:60,
        height:60,
        backgroundColor:'powderblue',
    },
    skyblue:{
        width:60,
        height:60,
        backgroundColor:'skyblue',
    },
    steelblue:{
        //width:60,
        height:60,
        backgroundColor:'steelblue',
    },
});

