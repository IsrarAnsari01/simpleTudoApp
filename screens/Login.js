/* eslint-disable */

import * as React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LoginForm from '../components/forms/LoginForm';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <LoginForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
