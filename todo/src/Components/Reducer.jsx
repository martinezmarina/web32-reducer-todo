export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_LIST':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()     
                }
            ];
        case 'COMPLETED':
            return (
                state.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo
                    }
                })
            )
        case 'CLEAR_COMPLETED':
            return(
                state.filter(todo => {
                    return !todo.completed
                })
            );

        default:
            return state;
    }
};

// create initial state
export const initialState = [
    {
        item: 'Complete Reducer Todo',
        completed: false,
        id: '1234567890'
    },
];