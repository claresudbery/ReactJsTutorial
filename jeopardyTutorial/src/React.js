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
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import Question from './Question';
import Answer from './Answer';

const data = [{
  id: 1,
  Q: "The company that created React.",
  A: "What is Facebook?"
},{
  id: 2,
  Q: "What happens during the lifecycle of a React component?",
  A: "Initialization, State/property updates, Destruction"
},{
  id: 3,
  Q: "True or False: JSX a requirement in React.",
  A: "What is false?"
},{
  id: 4,
  Q: "A popular flux framework.",
  A: "What is Redux, Flummox, Alt, Fluxible, etc?"
},{
  id: 5,
  Q: "A component that is a function of the properties provided to it.",
  A: "What are stateless components?"
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
  Q: "React focuses on this part of MVC.",
  A: "What is view?"
},{
  id: 10,
  Q: "The name of the CLI used to create react apps.",
  A: "What is create-react-app?"
}];

const names = [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ];

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
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}>
                     
                     <Text style = {styles.text}>
                        {item.Q}
                     </Text>
                     <Text style = {styles.text}>
                        {item.A}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
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

ReactJS.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('./img/react.png')}/>
  )
}