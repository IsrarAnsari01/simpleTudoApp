/* eslint-disable */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ResetPassword from '../screens/ResetPassword';
import SignUp from '../screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            title: 'Reset Password',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Join with us!',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Index;
