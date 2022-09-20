// import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry, Text, View} from 'react-native';

// import App from '@wcpos/core';
const App = props => (
  <View>
    <Text>App1</Text>
  </View>
);

AppRegistry.registerComponent('WooCommercePOS', () => App);
