/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Image,StyleSheet,Text,View} from 'react-native';

//React Native'de bileşenlerin özellikleri basitçe props olarak telafuz edilir.React Native'de 
//bileşenlerin çoğu oluşturuldukları sırada farklı parametreler ile özelleştirilebilir. Bu 
//parametreler props olarak bilinir. Değişmez ve değiştirilemezler.
//Props Örneklerinden biri, görüntüyü kontrol eden image bileşeninin source özelliğidir.
export default class Props extends Component {
  render() {
    let imagePath={url:'https://facebook.github.io/react-native/img/header_logo.png'};
    return (
      <View style={styles.container}>
          <Text style={styles.karsilama}>React Native'e Hoşgeldiniz</Text>
          <Image source={imagePath} style={{width:300,height:300}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a7a6a9',
    },
    karsilama:{
        fontSize:30,
        textAlign:'center',
        margin:20,
    }
});
