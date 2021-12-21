const INITIAL_STATE = {
    specials: []
}

const specialsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_SPECIALS':
            return {...state, specials:action.payload}
        default:
            return state
    }
}

export default specialsReducer;