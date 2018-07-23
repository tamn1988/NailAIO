import database from '../firebase/firebase'
//ADD SERVICE
export const addService = (service) => {
    database.ref('/services').update({
        [service.service]: {
            ...service
        }
    })
}

//SET_SERVICE
export const setService = (payload)=>({
    type: 'SET_SERVICE',
    payload
})

//GET_SERVICE
export const getService = ()=>{
    return (dispatch) => {
        database.ref('/services').on('value', (snapshot)=> {
            const payload = snapshot.val()
            return dispatch(setService(payload))
        })
    }
}

