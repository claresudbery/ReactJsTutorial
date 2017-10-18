/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCAA; /* was F5FCFF for a pale blue. */
  margin: 40px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <TextStyled>
          Welcome to React Native!
        </TextStyled>
        <Text>
          To get started, edit App.js
        </Text>
        <Text>
          {instructions}
        </Text>
      </Container>
    );
  }
}