import {applyMiddleware, combineReducers, createStore } from 'redux';
import portfolioReducer from './portfolio-reducer';
import thunkMiddleWare from 'redux-thunk';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers(
    {
        portfolio: portfolioReducer,
    }
);

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;