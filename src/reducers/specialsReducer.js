const INITIAL_STATE = {
    specials: [],
    specialDetails:[]
}

const specialsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_SPECIALS':
            return {...state, specials:action.payload}
        case 'GET_SPECIAL':
            return {...state, specialDetails:action.payload}
        case 'CLEAR_SPECIAL':
            return {...state, specialDetails:[]}
        case 'UPDATE_SPECIAL':
            const updatedList = state.specials.map((special) =>{
                if(special.uuid === action.payload.uuid){
                    return action.payload
                }else{
                    return special
                }
            })

            return {...state, specials: updatedList}
        case 'ADD_SPECIAL':
            return {...state, specials:[...state.specials, action.payload]}
        case 'DELETE_SPECIAL':
            const filteredData = state.specials.filter((special) => special.uuid !== action.payload)
            return {...state, specials:filteredData}
        default:
            return state
    }
}

export default specialsReducer;