export default (state = {}, action) => {
    switch (action.type) {
        case "FETCH_SERVICES":
            return {
                services: action.payload
            }

        default:
            return state;
    }
}