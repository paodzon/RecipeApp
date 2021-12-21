import React,{useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipes} from './actions/recipesActions';
import { getSpecials } from './actions/specialsActions';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import RecipeDetails from './pages/RecipeDetails';
import SpecialsPage from './pages/SpecialsPage';
import './App.scss';
import AddSpecial from './pages/AddSpecial';
import EditSpecial from './pages/EditSpecial';

const App = () =>{

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getSpecials())
        dispatch(getRecipes());
    },[])

    return(<div className='app'>
        <div className='app__navbar'>
        <Navbar/>
        </div>
        <div className='app__body'>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/recipe/:id' element={<RecipeDetails/>} />
            <Route path='/specials' element={<SpecialsPage/>} />
            <Route path='/addspecial' element={<AddSpecial/>} />
            <Route path='/editspecial/:id' element={<EditSpecial/>} />
        </Routes>
        </div>
        
    </div>)
}

export default App