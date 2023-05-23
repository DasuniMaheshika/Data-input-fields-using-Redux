const initialState = {
    tableData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                tableData: [...state.tableData, action.payload],
            };
        default:
            return state;
    }
};


export default reducer;