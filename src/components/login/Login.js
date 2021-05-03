/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Actions', this.props);
    this.props.actions.login();
  }
  render() {
    console.log('Props', this.props);
    return (
      <SafeAreaView>
        <Text style={styles.text}>Welcome to react native</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
  },
});

export default Login;
