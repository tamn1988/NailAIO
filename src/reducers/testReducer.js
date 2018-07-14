const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH':
            return {
                employees: action.payload
            }
        default:
            return state;
    }
}