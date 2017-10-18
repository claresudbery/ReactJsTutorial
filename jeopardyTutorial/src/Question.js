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
  View
} from 'react-native';
import styled from 'styled-components/native';

export default class Question extends Component<{}> {
  render() {
    return (
      <View>
        <Text>{this.props.q}</Text>
      </View>
    );
  }
}