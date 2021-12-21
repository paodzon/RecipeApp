import menuAPI from "../services/menuAPI";
import { useNavigate } from "react-router-dom";



export const getSpecials = () => async(dispatch) =>{

    const response = await menuAPI.get('/specials');

    dispatch({
        type:'GET_SPECIALS',
        payload: response.data
    })
}

export const getSpecial = (id) => async(dispatch) =>{
    const response = await menuAPI.get(`/specials/${id}`);

    dispatch({
        type:'GET_SPECIAL',
        payload:response.data
    })
}

export const clearSpecial = () =>{
    return({
        type:'CLEAR_SPECIAL'
    })
}

export const addSpecial = (data) => async(dispatch) =>{
    const response = await menuAPI.post('/specials', {...data});
    
    dispatch({
        type:'ADD_SPECIAL',
        payload: response.data
    })
    
    
}

export const updateSpecial = (id, data) =>async(dispatch) =>{
    const response = await menuAPI.patch(`/specials/${id}`, {...data});

    dispatch({
        type:'UPDATE_SPECIAL',
        payload: response.data
    })
}

export const deleteSpecial = (id) => async(dispatch) =>{
    await menuAPI.delete(`/specials/${id}`);

    dispatch({
        type:'DELETE_SPECIAL',
        payload: id
    })
}

