const INITIAL_STATE = {
    recipes: [],
    recipeDetails:[]
}

const recipesReducer =(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_RECIPES':
            return {...state, recipes:action.payload};
        case 'GET_RECIPE':
            return {...state, recipeDetails: action.payload}
        case 'CLEAR_RECIPE':
            return {...state, recipeDetails:[]}
        default:
            return state
    }
}

export default recipesReducer;