import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Button } from './components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <View style={tempStyle.containerStyle}>
          <Button />
        </View>
      </Provider>
    );
  }
}

const tempStyle = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
};
