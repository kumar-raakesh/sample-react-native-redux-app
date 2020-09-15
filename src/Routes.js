import Login from './components/login/Login';
import CommonContainer from './containers/commonContainer';
import React from 'react';
import {connect} from 'react-redux';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({Home: Login});

// const AuthStack = createStackNavigator({SignIn: Login});

// const RootNavigator = CommonContainer(
//   createAppContainer(
//     createSwitchNavigator(
//       {
//         AuthLoading: Login,
//         App: AppStack,
//         Auth: AuthStack,
//       },
//       {
//         initialRouteName: 'AuthLoading',
//       },
//     ),
//   ),
// );
// export {RootNavigator};

const AuthNavigator = createStackNavigator({
  Login: CommonContainer(Login),
});

const RootNavigator = createAppContainer(AuthNavigator);

export {RootNavigator};

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import Login from './components/login/Login';
// import CommonContainer from './containers/commonContainer';

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Login}
//           options={{title: 'Welcome'}}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
