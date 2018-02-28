import {
    combineReducers,
} from 'redux';

import { testReducer } from '../reducers/test'

export const reducers = combineReducers({
    test: testReducer,
});
