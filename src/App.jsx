import React,{useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getRecipes} from './actions/recipesActions';
import { getSpecials } from './actions/specialsActions';
import Homepage from './pages/Homepage';
import RecipeDetails from './pages/RecipeDetails';
import './App.scss';

const App = () =>{

    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getSpecials())
        dispatch(getRecipes());
    },[])

    return(<div className='app'>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/recipe/:id' element={<RecipeDetails/>} />
        </Routes>
    </div>)
}

export default App