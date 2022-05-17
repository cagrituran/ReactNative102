/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View>
//         <Text style={styles.karsilama}>Hello World</Text>
//       </View>
//     );
//   }
// }

export default class App extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <View style={{backgroundColor:'blue',flex:0.3}} />
            <View style={{backgroundColor:'red',flex:0.3}} />
            <View style={{backgroundColor:'green',flex:0.3}} />
          <Text style={{fontSize:18}}>Kaan</Text>

        </View>
      );
    }
  }
// StyleSheetden oluşturacağım yapıyı Styles nesnesine tanımlıyorum. Aslında burada class oluşturdum. Flex1 dediğimde 1 alan için Flex kullanıyorum.
const styles = StyleSheet.create({
container:{
    felx: 1,
    flexDirection: 'row',
    height: 100,
    width: "80%",
    backgroundColor: '#5ead97',



}
    //   karsilama: {
//     fontSize: 20,
//     color: 'red',
//     textAlign:'center',
//     margin:10,
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//   },
});