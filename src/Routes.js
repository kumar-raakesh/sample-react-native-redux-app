import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import CommonContainer from './containers/commonContainer';
import Login from './components/login/Login';
import Example from './components/example/Example';

const MainStackNavigator = () => {
  let Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Example'}>
        <Stack.Screen name="Login" component={CommonContainer(Login)} />
        <Stack.Screen name="Example" component={CommonContainer(Example)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

class RootNavigator extends Component {
  render() {
    return <>{<MainStackNavigator />}</>;
  }
}

export default RootNavigator;
