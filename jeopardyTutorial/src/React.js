/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
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
  margin: 300px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`

export default class ReactJS extends Component<{}> {
  render() {
    return (
      <Container>
        <TextStyled>
          ReactJS Jeopardy
        </TextStyled>
      </Container>
    );
  }
}

ReactJS.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/react.png')}/>
  )
}