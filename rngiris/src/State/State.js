/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class State extends Component {
    state={
        myState:'bu bir text bilgisini tutan state yapısıdır.',
    };
    updateState=()=> {this.setState({myState:'Bu state degistirildi.'})};
  render() {
    return (
      <View>
          <Text onPress={this.updateState}>{this.state.myState}</Text>

      </View>
    )
  }
}
