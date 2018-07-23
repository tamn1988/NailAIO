const defaultState = {
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEE':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}