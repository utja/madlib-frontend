import { combineReducers } from 'redux';
import userReducer from './userReducer';
import storyReducer from './storyReducer';
import drawingReducer from './drawingReducer';

const rootReducer = combineReducers({
    user: userReducer,
    stories: storyReducer,
    drawings: drawingReducer
  })

export default rootReducer