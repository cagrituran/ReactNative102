/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text, Button } from 'react-native';

export default function About({navigation,route}) {
    const {navigate} = navigation;
    const {title,itemId} = route.params;
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>{JSON.stringify(title)}</Text>
        <Text>{JSON.stringify(itemId)}</Text>
        <Button title="Go to details....again" onPress={()=>navigation.push('Detail')}/>
        <Button title="Go back to first screen in stack" onPress={()=>navigation.popToTop()}/>
    </View>
  );
}