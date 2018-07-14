import database from '../firebase/firebase'

//ADD_EMPLOYEE
export const addEmployee = (employee) => {
    //Update Database
    database.ref('/employees').update({
        [employee.name]: {
            ...employee
        }
    })
}

//SET_EMPLOYEE
export const setEmployee = (payload) => ({
    type: 'FETCH',
    payload
})

//GET_EMPLOYEE
export const getEmployee = ()=> {
    return (dispatch) => {
        database.ref('/employees').on('value', (snapshot)=>{
            const payload = snapshot.val()
            return dispatch(setEmployee(payload))
        })
    }
}






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