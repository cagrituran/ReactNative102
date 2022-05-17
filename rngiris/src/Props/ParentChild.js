/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class ChildClass extends Component{
    render(){
        return (
            <View style={{alignItems:'center'}}>
                <Text style={styles.karsilama}>Selam {this.props.name}</Text>
            </View>
        );
    }
}

export default class ParentChild extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
          <ChildClass name="Cagri"/>
          <ChildClass name="Burcu"/>
          <ChildClass name="Esra"/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    karsilama:{
        fontSize:30,
    },
});
