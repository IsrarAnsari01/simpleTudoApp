/* eslint-disable */

import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Index from './navigation/Index';
export default function App() {
  return (
    <NativeBaseProvider>
      <Index />
    </NativeBaseProvider>
  );
}
