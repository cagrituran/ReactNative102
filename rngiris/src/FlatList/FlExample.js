/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, FlatList} from 'react-native';

export default class flExample extends Component {
  renderSeparator = () => {
    return <View style={{height: 1, width: '100%', backgroundColor: '#000'}} />;
  };

  getListViewItem = item => {
    Alert.alert(item.key);
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Android'},
            {key: 'iOS'},
            {key: 'Java'},
            {key: 'JavaScript'},
            {key: 'React Native'},
            {key: 'Swift'},
            {key: 'PHP'},
            {key: 'C++'},
            {key: 'C#'},
            {key: 'Python'},
            {key: 'Ruby'},
            {key: 'Go'},
            {key: 'Objective-C'},
            {key: 'Kotlin'},
            {key: 'C'},
          ]}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={this.getListViewItem.bind(this, item)}>
              {item.key}
            </Text>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
