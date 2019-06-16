
import axios from "axios";

export const IncNumberAsync = () =>{
    return{
        type: "ON_INC",value:1
    }
}


//for thunk
export const IncNumber = () =>{
    return dispatch => {
        setTimeout(() => {
            dispatch (IncNumberAsync())
        }, 2000);
    }
}



export const DecNumber = () =>{
    return{
        type: "ON_DEC", value:1
    }
}



export const onLogOut = () =>{
    return{
        type: "ON_LOGOUT"
    }
}

export const onNameChange = (event) =>{
    return{
        type: "NAME_CHANGE", nameValue: event.target.value
    }
}

export const onPassChange = (event) =>{
    return{
        type: "PASS_CHANGE", passValue: event.target.value 
    }
}


export const onLogIn = () =>{
    return{
        type:"ON_LOG_IN"
    }
}


export function loadAgGridData(){
    return(dispatch)=>{
        return axios.get("../test.json")
                    .then((response)=>{
                        dispatch(agGridData(response.data))
                    })
    }
}

export function agGridData(gridData){
  return{
        type:"AG_GRID_DATA",
        payload:gridData
    }
}


