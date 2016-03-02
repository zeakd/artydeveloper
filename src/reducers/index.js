import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import posts from './posts';

const rootReducer = combineReducers({
    posts,
    routing
});

export default rootReducer;