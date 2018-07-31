import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { HomeScreen } from './screens';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <View style={tempStyle.containerStyle}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}

const tempStyle = {
  containerStyle: {
 
    flex: 1
  }
};
