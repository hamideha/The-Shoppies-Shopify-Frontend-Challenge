const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOMINATION':
            return {
                ...state,
                nominations: [...state.nominations, action.payload],
            }
        case 'REMOVE_NOMINATION':
            return {
                ...state,
                nominations: state.nominations.filter(nomination => nomination !== action.payload),
            }
        default:
            throw new Error();
    }
}

export default Reducer;