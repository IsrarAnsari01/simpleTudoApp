/* eslint-disable */

import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';
function ResetPassword({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <ResetPasswordForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ResetPassword;
