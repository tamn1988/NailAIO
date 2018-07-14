import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import testReducer from '../reducers/testReducer';

export default () => {
    const store = createStore(testReducer, applyMiddleware(
        ReduxThunk
    ))
    return store
};

