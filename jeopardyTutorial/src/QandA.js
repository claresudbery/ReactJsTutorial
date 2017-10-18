/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';

export default class QandA extends Component<{}> {
  render() {
    return (
      <TouchableOpacity
         style = {styles.container}>
         
         <Text style = {styles.text}>
            {this.props.q}
         </Text>
         <Text style = {styles.text}>
            {this.props.a}
         </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})