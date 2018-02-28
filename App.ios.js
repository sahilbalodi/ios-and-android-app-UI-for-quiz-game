/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import RadioButton from 'radio-button-react-native';
import styles from './components/Styles/styles.ios';

import DisplayButton from './components/Button/Button.ios';
import InputName from './components/InputName/InputName.ios';
import CalculateButton from './components/CalculateButton/CalculateButton.ios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: null,
      questions: [],
      responses: [],
      score: 0,
      topScorers: [],
    };
  }
  login() {
    if (this.state.name === null || undefined) {
      alert('enter name');
      return;
    }
    this.setState({
      name: this.state.name,
      page: 1,
    }, () => {
      axios.post('http://10.0.2.2:8090/user/login', {
        name: this.state.name,
      })
        .then((response) => {
          this.setState({ responses: response.data });
          axios.get('http://10.0.2.2:8090/readQuestion')
            .then((responseOfQuestions) => {
              this.setState({ questions: responseOfQuestions.data });
            });
        });
    });
  }
  username(text) {
    const name = text;
    this.setState({ name });
  }
  CalculateSum() {
    this.setState({ page: 2 });
    if (this.state.responses.length === this.state.questions.length) {
      axios.post('http://10.0.2.2:8090/calculateScore', {
        name: this.state.name,
      }).then((responseForSumRequest) => {
        axios.get('http://10.0.2.2:8090/topScorers').then((topScorers) => {
          this.setState({ topScorers, page: 2, score: responseForSumRequest.data });
        });
      });
    } else {
      alert('attempt all questions');
    }
  }
  playAgain() {
    this.setState({
      page: 0,
      name: null,
      questions: [],
      responses: [],
      score: 0,
      topScorers: [],
    });
  }
  render() {
    if (this.state.page === 0) {
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
          <InputName value={text => this.username(text)} />
          <DisplayButton value="Login" login={() => this.login()} />
        </View>
      );
    } else if (this.state.page === 1) {
      return (
        <ScrollView>
          <View>
            <Text style={styles.Hello}>
              {'Hello '}{this.state.name}
            </Text>
            <View style={styles.cardCollection}>
              <Text style={{ fontWeight: 'bold' }}>
                {'Question\n'}
              </Text>
              <View style={styles.question}>
                <Text>sahil</Text>
              </View >
              <View style={{
position: 'relative',
        left: 20,
}}
              >
                <RadioButton currentValue={0} value={1} onPress={() => Alert.alert('option1')}>
                  <Text>option1</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={2} onPress={() => Alert.alert('option2')}>
                  <Text>option2</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={3} onPress={() => Alert.alert('option3')}>
                  <Text>option3</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={4} onPress={() => Alert.alert('option4')}>
                  <Text>option4</Text>
                </RadioButton><Text />
              </View>
            </View>
            <View style={styles.cardCollection}>
              <Text style={{ fontWeight: 'bold' }}>
                {'Question\n'}
              </Text>
              <View style={styles.question}>
                <Text>sahil</Text>
              </View >
              <View style={{
position: 'relative',
        left: 20,
}}
              >
                <RadioButton currentValue={0} value={1} onPress={() => Alert.alert('option1')}>
                  <Text>option1</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={2} onPress={() => Alert.alert('option2')}>
                  <Text>option2</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={3} onPress={() => Alert.alert('option3')}>
                  <Text>option3</Text>
                </RadioButton><Text />
                <RadioButton currentValue={0} value={4} onPress={() => Alert.alert('option4')}>
                  <Text>option4</Text>
                </RadioButton><Text />
              </View>
            </View>
            <CalculateButton value="Calculate" onClick={() => this.CalculateSum()} />
          </View>
        </ScrollView>
      );
    }

    return (
      <View>
        <Text style={styles.Hello}>
          {'Hello '}{this.state.name}
        </Text>
        <View><Text style={styles.scoreHeading}>Your Score</Text></View>
        <View><Text style={styles.score} >{this.state.score}/12</Text></View>
        <View><Text style={styles.leaderBoard} >LeaderBoard</Text></View>
        <View style={styles.leader}>
          <Text>1. sahil<Text style={styles.leaderScore}>   10</Text></Text>
        </View >
        <View style={styles.leader}>
          <Text>2. sahil<Text style={styles.leaderScore}>   10</Text></Text>
        </View >
        <View style={styles.leader}>
          <Text>3. sahil<Text style={styles.leaderScore}>   10</Text></Text>
        </View >
        <CalculateButton value="Play Again" onClick={() => this.playAgain()} />
      </View>
    );
  }
}

