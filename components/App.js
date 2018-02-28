/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './Header';

import DisplayButton from './Button';
import InputName from './InputName';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    marginBottom: 5,
    margin: 5,
  },
  username: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    position: 'relative',
    backgroundColor: 'white',
    top: 45,
    left: 10,
    margin: 5,
  },
  login: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    position: 'relative',
    backgroundColor: 'white',
    top: 15,
    left: 10,
    margin: 5,
  },
  welcome: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    position: 'relative',
    backgroundColor: '#00BCF4',
    top: 15,
    margin: 5,
  },
  quizzy: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    position: 'relative',
    backgroundColor: '#00BCF4',
    top: 15,
    margin: 5,
  },
  combinedNoteTitleAndButton: {
    flex: 0,
    position: 'relative',
    justifyContent: 'flex-start',
    top: -120,
    flexDirection: 'row',
    height: 100,
  },
});
export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          {'\n\nWelcome\n\nto \n\n'}
          <Text style={styles.quizzy}>{'Quizzy!\n\n'}
          </Text>
        </Text>
        <Text style={styles.login}>Login
        </Text>
        <Text style={styles.username}>Username
        </Text>
        <InputName />
        <DisplayButton />
      </View>
    );
  }
}

