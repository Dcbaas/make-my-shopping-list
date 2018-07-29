import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <View>
          <Text>DISCO BRO</Text>
        </View>
      </Provider>
    );
  }
}

