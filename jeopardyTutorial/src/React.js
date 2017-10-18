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
  Image,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import {List, ListItem} from 'react-native-elements';

const data = [{
  id: 1,
  Q: "The company that created React.",
  A: "What is Facebook?"
},{
  id: 1,
  Q: "What happens during the lifecycle of a React component?",
  A: "Initialization, State/property updates, Destruction"
},{
  id: 1,
  Q: "True or False: JSX a requirement in React.",
  A: "What is false?"
},{
  id: 1,
  Q: "A popular flux framework.",
  A: "What is Redux, Flummox, Alt, Fluxible, etc?"
},{
  id: 1,
  Q: "A component that is a function of the properties provided to it.",
  A: "What are stateless components?"
},{
  id: 1,
  Q: "True or False: React is an MVC based framework.",
  A: "What is false?"
},{
  id: 1,
  Q: "_____ needs to be updated to achieve dynamic UI updates.",
  A: "What is state?"
},{
  id: 1,
  Q: "The API necessary for every React component.",
  A: "What is render?"
},{
  id: 1,
  Q: "React focuses on this part of MVC.",
  A: "What is view?"
},{
  id: 1,
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

export default class ReactJS extends Component<{}> {
  render() {
    return (
      <Container>
        <TextStyled>
          ReactJS Jeopardy
        </TextStyled>
        <List>
          {data.map((trivia) => (
            <ListItem 
              key={trivia.Q}
              title={trivia.Q}
            />
          ))}
        </List>
      </Container>
    );
  }
}

ReactJS.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/react.png')}/>
  )
}