import {LOAD_MAP} from '../constants/actions';

export const loadMap = (collection) => ({
  type: LOAD_MAP,
  collection,
});
