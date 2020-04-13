/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import {initStore} from './src/util/configureStore';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';
import TestContainer from './src/page/test/TestContainer';
import {Landing} from './src/page/Landing';
import MapContainer from './src/page/map/MapContainer';
export const store = initStore();
const Scenes = [
  {
    key: 'test',
    component: TestContainer,
    initial: false,
  },
  {
    key: 'home',
    component: Landing,
    initial: true,
  },
  {
    key: 'map',
    component: MapContainer,
    initial: false,
  },
];
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          {Scenes.map((item) => (
            <Scene
              key={item.key}
              component={item.component}
              hideNavBar={true}
              initial={item.initial}
            />
          ))}
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
