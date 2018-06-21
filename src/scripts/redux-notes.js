// create redux store
import { createStore } from 'redux';


//createStore requires a function as an argument.2ne argument is the action The function takes state as an argument.
//do not change state and action. Use old values to create a new value
const store = createStore(countReducer)


//Reducers - determines what to do base off the action. Changes state
// 1. Pure functions - output is determine the input. (state and action)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        default:
            return state;
    }
}


//Takes a function as an argument that runs everytime the store changes.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
//calling unsubscribe() will cancel the watch.

//Actions - an object that gets sent to the store
//store.dispatch - sends off an action object. type is required
//can pass as many things as we want inside the object.
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})

// Action Generators - returns action objects
// takes input in and returns an action object.
// Makes it easier to manage, avoid typos.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    //if argument (payload) does not exist, default to empty object. (when payload is passed as an argument) 
    // We could also destructure an object in the argument and set a default value. if object does not exist ten it defaults to an empty object and sets incrementby value to 1
    type: 'INCREMENT',
    incrementBy,
});


store.dispatch(incrementCount({ incrementBy: 5 }));


//trying to access a property on an undefined object will throw an error. cannot read property of undefined. By default to an empty object, problem is solved.




//Store creation
// const store = createStore(expenseReducer);

//combinereducers let you combine multiple reducers to create a single stor.
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

let sub = store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0, id=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        description,
        note,
        amount,
        createdAt,
        id
    }
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


store.dispatch(addExpense({ description: 'Yup', id: 1}))
store.dispatch(addExpense({ description: 'No' }))
store.dispatch(editExpense(1, {description: 'pizza'}))
