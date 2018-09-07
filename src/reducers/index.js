import { combineReducers } from 'redux';

import BookReducer from './BookReducer';

const rootReducer = combineReducers({
  state: BookReducer
});

export default rootReducer;
