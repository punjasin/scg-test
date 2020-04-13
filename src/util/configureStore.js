import {createStore, compose /* , applyMiddleware*/} from 'redux';
import GlobalReducer from '../reducers/GlobalReducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}
const composedEnhancer = compose(...enhancerList);

const initStore = () => createStore(GlobalReducer, {}, composedEnhancer);

module.exports = {
  initStore,
};
