import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from  '../routers/routers';
import '../styles/styles.css'
const jsx = (
    <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('app'));



//twitch secret : v2pvggqfhu15jm3qkaophj4ltuev14
//client id : pmp23xi405ww8lrij1qmtohkra428g
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import '../firebase/firebase'

// const defaultStore = {
//     fetching: false,
//     fetched: false,
//     error: null,
//     data: [],
// }

// const exampleReducer = (state = defaultStore, action) => {
//     switch (action.type) {
//         case 'FETCH_USERS_START':
//             return {
//                 ...state,
//                 fetching: true
//             }
//         case 'RECEIVE_USERS':
//             return {
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 data: action.payload
//             }
//         case 'FETCH_USERS_ERROR':
//             return {
//                 ...state,
//                 fetching: false,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

// const store = createStore(exampleReducer,
//     applyMiddleware(
//         ReduxThunk,
//         createLogger()
//     )
// );

// store.dispatch((dispatch) => {
//     dispatch({ type: 'FETCH_USERS_START' })
//     fetch('https://api.twitch.tv/helix/streams?game_id=505845', {
//         headers: {
//             'Client-ID': 'pmp23xi405ww8lrij1qmtohkra428g'
//         }
//     })
//         .then(response => response.json())
//         .then((json) => {
//             dispatch({ type: 'RECEIVE_USERS', payload: json.data })
//         })
//         .catch((err) => {
//             dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
//         })
// })
