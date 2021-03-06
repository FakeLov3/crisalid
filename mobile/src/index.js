import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { persistor, store } from './store';
import App from '~/App';
// import { Container } from './styles';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#004C8C" />
        <App />
      </PersistGate>
    </Provider>

  );
}
