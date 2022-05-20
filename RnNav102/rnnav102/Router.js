/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Button, Image,Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import About from './screen/About';
import Detail from './screen/Detail';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',

            headerTitle: () => (
              <Text>Galatasaray</Text>
            ),
            headerLeft: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="About"
          component={ About }
          options={{
            title: 'About',

            headerStyle: {
              backgroundColor:'#f4511e',
              },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
            headerBackTitle:'Back',
            headerTitleAlign:'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={ Detail }
          options={{
            title: 'Detail',
            headerStyle: {
              backgroundColor:'#f4511e',
              },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
            headerBackTitle:'Back',
            headerTitleAlign:'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./src/Image/gs.png')}
    />
  );
}