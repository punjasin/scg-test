import {LOAD_MAP} from '../constants/actions';

const INIT_STATE = {
  maps: [],
};
const test = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_MAP: {
      return action.collection;
    }
    default:
      return state;
  }
};

export default test;
