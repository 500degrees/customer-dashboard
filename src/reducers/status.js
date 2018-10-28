export default (state = { openRequests: 0 }, action) => {
    if (action.type.includes('FETCH') || action.type.includes('REQUEST')) {
        if (action.type.includes('SUCCESS') || action.type.includes('FAILED')) {
            return {...state, openRequests: state.openRequests - 1};
        }
        return {...state, openRequests: state.openRequests + 1 };
    } 
    return state;
}