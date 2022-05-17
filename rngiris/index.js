/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Buttons from './src/RnButton/Buttons';
// import Example from './src/ElementWithFlex/Example';
// import FlexDirection from './src/LayoutAndFlexbox/FlexDirection';
//import Flex from './src/HeightAndWidth/Flex';
// import Fixed from './src/HeightAndWidth/Fixed';
// import ParentChild from './src/Props/ParentChild';
// import Props from './src/Props/Props';
// import State from './src/State/State';
// import StatePass from './StatePass';

AppRegistry.registerComponent(appName, () => Buttons);
