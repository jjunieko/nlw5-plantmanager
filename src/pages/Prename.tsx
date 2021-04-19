import React from 'react';
import { View, Button, Text } from 'react-native';

const Prename = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

Prename.navigationOptions = {
  title: 'About',
}


export default Prename;