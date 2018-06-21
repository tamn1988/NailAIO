import { createStore, combineReducers } from 'redux';

const exampleReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(exampleReducer);

console.log(store.getState());




