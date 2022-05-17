/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class StatePass extends Component {
  state: {
    password: string,
    isPasswordVisible: boolean,
    toggleText: string,
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      isPasswordVisible: true,
      toggleText: 'Show',
    };
  }
  handleToggle = () => {
    const {isPasswordVisible} = this.state;
    if (isPasswordVisible) {
      this.setState({
        isPasswordVisible: false,
        toggleText: 'Hide',
      });
    } else {
      this.setState({
        isPasswordVisible: true,
        toggleText: 'Show',
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={this.state.isPasswordVisible}
          style={{
            width: 400,
            height: 50,
            backgroundColor: '#a7a6a9',
            color: 'white',
            fontSize: 20,
            padding: 15,
          }}
        />
        <TouchableOpacity onPress={this.handleToggle}>
          <Text style={{fontSize: 20}}>{this.state.toggleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});