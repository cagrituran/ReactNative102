/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View,Text } from 'react-native';

export default function HomeScreen({navigation}) {
  const {navigate} = navigation;
  return (
      <View style={{flex:1}}>
        <View>
            <Text>HomeScreen</Text>
        </View>
        <View>
            <Button title="Go to About..." onPress={()=> navigation.navigate('About',{title:'Hakkimizda',itemId:15})}>
            </Button>
        </View>
    </View>
  );
}