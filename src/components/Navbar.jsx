import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.scss';
import logo from '../img/WhiteP0W.png';

const Navbar = () =>{

    const navigate = useNavigate();

    return(<nav>
        <img onClick={() => navigate('/')} src={logo} width='100'/>

        <ul>
            <Link to='/'><li>Recipes</li></Link>
            <Link to='/specials'><li>Specials</li></Link>
        </ul>
        </nav>)
}

export default Navbar