import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSpecial } from '../actions/specialsActions';
import './SpecialsCard.scss';

const SpecialsCard = (props) => {

    const {id,type, title, text} = props

    const dispatch = useDispatch();

    return (
      
        <div className="specialscard">
            <Link className='nocolor' to={`/editspecial/${id}`}>
          <div className="specialscard__details">
            ID:{id}
            <h3>{title}</h3>
            <span>{type}</span>
            <p>{text}</p>
          </div>
          </Link>
          <button onClick={() => dispatch(deleteSpecial(id))}>DELETE</button>
        </div>
      
    );
}

export default SpecialsCard
