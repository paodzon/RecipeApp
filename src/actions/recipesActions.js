import menuAPI from "../services/menuAPI"

export const getRecipes = () => async(dispatch) =>{
    const response = await menuAPI.get('/recipes');

    dispatch({
        type:'GET_RECIPES',
        payload: response.data
    })
}

export const getRecipe = (id) => async(dispatch) =>{

    const response = await menuAPI.get(`/recipes/${id}`)

    dispatch({
        type:'GET_RECIPE',
        payload:response.data
    })
}

export const clearRecipe = () =>{
    return({
        type:'CLEAR_RECIPE',
    })
}