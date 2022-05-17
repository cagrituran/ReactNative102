/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Button,Alert,TextInput,StyleSheet,View} from 'react-native';

export default class Example extends Component {
  state={
    placeName:'',
    palce:[],
  };
  placeNameChangedHandler=(val)=>{
    this.setState({placeName:val});
  };
  placeSubmitHandler=()=>{
    Alert.alert('Butona Tıklandı');
  };
  render() {
    return (
      <View style={style.container}>
        <TextInput placeholder="Place Name" onChangeText={this.placeNameChangedHandler} style={style.placeInput}/>
        <Button title="Button" onPress={this.placeSubmitHandler}/>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    padding:26,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
  },
});
