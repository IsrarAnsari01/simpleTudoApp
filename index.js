/**
 * @format
 */
/* eslint-disable */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reduxStore from './store/Index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const RNRedux = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => RNRedux);
