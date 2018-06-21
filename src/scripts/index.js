import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const defaultStore = {
    fetching: false,
    fetched: false,
    error: null,
    data: [],
}

const exampleReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case 'FETCH_USERS_START':
            return {
                ...state,
                fetching: true
            }
        case 'RECEIVE_USERS':
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        case 'FETCH_USERS_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(exampleReducer,
    applyMiddleware(
        ReduxThunk,
        createLogger()
    )
);

store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_START' })
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((json) => {
            dispatch({ type: 'RECEIVE_USERS', payload: json })
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
        })
})
