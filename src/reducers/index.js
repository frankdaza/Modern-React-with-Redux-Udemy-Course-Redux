import { combineReducers } from 'redux';

import BookReducer from './reducer_books';
import ActiveBook from '../reducers/reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
