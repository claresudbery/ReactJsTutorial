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

export default class Ember extends Component<{}> {
  render() {
    return (
      <Container>
        <TextStyled>
          Ember Jeopardy
        </TextStyled>
      </Container>
    );
  }
}

Ember.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/ember.png')}/>
  )
}