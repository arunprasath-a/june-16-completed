

const initialState = {
    userName: "",
    password: "",
    counter: 0,
    headerData:[],
    rowData:[],
    loading:true
}





const reducer = (state = initialState, action) => {


    const newState = { ...state };


    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue });

        case "PASS_CHANGE":
            return Object.assign({}, newState, { password: action.passValue });

        case "ON_INC":
            return Object.assign({}, newState, { counter: newState.counter + action.value });

        case "ON_DEC":
            return Object.assign({}, newState, { counter: newState.counter - action.value });

        case "ON_LOGOUT":
            return Object.assign({}, newState, { userName: "", password: "" })

        case "AG_GRID_DATA":
            return Object.assign({}, newState, { headerData: action.payload[0].columnDefs, rowData: action.payload[0].rowData,loading:false })
                                            
        default:
            return newState;

    }

}

export default reducer;