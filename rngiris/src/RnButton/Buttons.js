/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Button,Alert,StyleSheet,View} from 'react-native';

export default class Buttons extends Component {
    onPressButton(){
        Alert.alert('Buttona Bastın!');
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.onPressButton} title="Butona Tıkla"/>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={this.onPressButton} title="Butona Tıkla" color="#009933"/>
          </View>
          <View style={styles.multiButtonContainer}>
            <Button onPress={this.onPressButton} title="Bu Buton Pasifleştirildi" disabled={true}/>
            <Button onPress={this.onPressButton} title="Oki"/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    buttonContainer:{
        margin:20,
    },
    multiButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
    },
});

