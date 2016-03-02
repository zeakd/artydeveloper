import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from '../../reducers';
import DevTools from '../containers/Devtools';

const reduxRouterMiddleware = syncHistory(browserHistory);

var finalCreateStore;
if (__DEV__) {
    finalCreateStore = compose(
        applyMiddleware(reduxRouterMiddleware, thunk),
        DevTools.instrument()
    )(createStore);
} else {
    finalCreateStore = compose(
        applyMiddleware(reduxRouterMiddleware, thunk)
    )(createStore);
}

// const finalCreateStore = applyMiddleware(middleware)(createStore);
export default function (initialState) {

    const store = finalCreateStore(reducers, initialState);
    reduxRouterMiddleware.listenForReplays(store);
    return store;
}