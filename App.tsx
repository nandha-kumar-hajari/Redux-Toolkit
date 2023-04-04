import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {persistor, store} from './src/reduxtoolkit/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
