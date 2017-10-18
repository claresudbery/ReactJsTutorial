/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import QandA from './QandA';

const data = [{
  id: 1,
  Q: "The company that created React.",
  A: "What is Facebook?"
},{
  id: 2,
  Q: "Initialization, State/property updates, Destruction",
  A: "What happens during the lifecycle of a React component?"
},{
  id: 3,
  Q: "True or False: JSX a requirement in React.",
  A: "What is false?"
},{
  id: 4,
  Q: "Popular flux frameworks.",
  A: "What are Redux, Flummox, Alt, Fluxible, etc?"
},{
  id: 5,
  Q: "A component that is a function of the properties provided to it.",
  A: "What is a stateless component?"
},{
  id: 6,
  Q: "True or False: React is an MVC based framework.",
  A: "What is false?"
},{
  id: 7,
  Q: "_____ needs to be updated to achieve dynamic UI updates.",
  A: "What is state?"
},{
  id: 8,
  Q: "The API necessary for every React component.",
  A: "What is render?"
},{
  id: 9,
  Q: "The part of MVC that React focuses on.",
  A: "What is view?"
},{
  id: 10,
  Q: "The name of the CLI used to create react apps.",
  A: "What is create-react-app?"
}];

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

setScrollHeight = (width, height) => this.setState({scrollHeight: height});

export default class ReactJS extends Component<{}> {
  render() {
    return (
      <View> 
          {
             data.map((item, index) => (
                <QandA key={item.id} q={item.Q} a={item.A}/>
             ))
          }
       </View>
    );
  }
}

ReactJS.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/react.png')}/>
  )
}