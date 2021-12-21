import menuAPI from "../services/menuAPI";

export const getSpecials = () => async(dispatch) =>{

    const response = await menuAPI.get('/specials');

    dispatch({
        type:'GET_SPECIALS',
        payload: response.data
    })
}