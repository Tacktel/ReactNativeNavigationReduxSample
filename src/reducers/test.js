const initial_states = {
    content: 0
}

export const testReducer = (state = initial_states, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                ...state,
                content: state.content + 1
            };
        default:
            return state;
    }
};
