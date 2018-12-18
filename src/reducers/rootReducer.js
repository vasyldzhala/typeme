import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resultsReducer from './resultsReducer';
import statisticsReducer from './statisticsReducer';

export default combineReducers({
  userReducer,
  resultsReducer,
  statisticsReducer
});
