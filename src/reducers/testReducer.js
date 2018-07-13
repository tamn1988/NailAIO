const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH':
            return action.payload;
        default:
            return state;
    }
}