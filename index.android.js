import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose } from 'redux'
import thunkmiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import styles from './styles/main'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Movies', () => Movies);
