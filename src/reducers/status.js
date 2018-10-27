export default (state = { openRequests: 0 }, action) => {
    console.log('action', action);
    if (action.type.includes('FETCH')) {
        if (action.type.includes('SUCCESS') || action.type.includes('FAILED')) {
            console.log('increase', state);
            return {...state, openRequests: state.openRequests - 1};
        }
        console.log('substract', state);
        return {...state, openRequests: state.openRequests + 1 };
    } 
    return state;
}