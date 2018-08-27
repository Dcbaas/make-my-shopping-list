import React from 'react';
import Firebase from 'firebase';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import Navigation from './Navigation';

export default class App extends React.Component {

  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyCy2QbBxR-cIbODkcjx3UTqTsF94wPKQMM',
      authDomain: 'make-my-shopping-list-48b9a.firebaseapp.com',
      databaseURL: 'https://make-my-shopping-list-48b9a.firebaseio.com',
      projectId: 'make-my-shopping-list-48b9a',
      storageBucket: 'make-my-shopping-list-48b9a.appspot.com',
      messagingSenderId: '545531973470'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <View style={tempStyle.containerStyle}>
          <Navigation />
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
