import {TEST_ACTION} from '../constants/actions';

const test = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default test;
