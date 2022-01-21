/* eslint-disable */

import * as React from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SignUpForm from '../components/forms/SignUpForm';
const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <SignUpForm navigation={navigation} />
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
