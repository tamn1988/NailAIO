import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import testReducer from '../reducers/testReducer';
import servicesReducer from '../reducers/servicesReducer';

export default () => {
    const store = createStore(combineReducers({
        employees: testReducer,
        services: servicesReducer
    }), applyMiddleware(
        ReduxThunk
    ))
    return store
};

