import {
    applyMiddleware,
    createStore,
} from 'redux';

import { reducers } from './combineReducers'

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState
    )
    return store;
};

export const store = configureStore();