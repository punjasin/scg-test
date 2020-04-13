/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {initStore} from './src/util/configureStore';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';
import TestContainer from './src/page/test/TestContainer';
export const store = initStore();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={TestContainer} title="Test" initial />
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
