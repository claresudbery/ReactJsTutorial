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
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Angular from './Angular';
import Ember from './Ember';
import ReactJS from './React';
import Vue from './Vue';

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

export default class jeopardyTutorial extends Component<{}> {
  render() {
    return (
      <Container>
        <Image source={require('./img/jeopardy-js.png')}/>
      </Container>
    );
  }
}

const mainNavigator = TabNavigator({
  Home: {
    screen: jeopardyTutorial,
    path: ''
  },
  Angular: {
    screen: Angular,
    path: 'angular'
  },
  React: {
    screen: ReactJS,
    path: 'react'
  },
  Ember: {
    screen: Ember,
    path: 'ember'
  },
  Vue: {
    screen: Vue,
    path: 'vue'
  }
});

AppRegistry.registerComponent('jeopardyTutorial', () => mainNavigator);