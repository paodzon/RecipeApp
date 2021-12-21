import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addSpecial} from '../actions/specialsActions';
import './AddSpecial.scss';

const AddSpecial = () => {


    const [type,setType] = useState('');
    const [title,setTitle] = useState('');
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const generateId = () =>{
        const serialLength = 20;
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randnum = 0;
        let serialID = '';

        for(let i=0; i<serialLength; i++){
            randnum = Math.floor(Math.random() * chars.length);
            serialID = chars[randnum] + serialID;
        }

        return serialID
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        const data = {
          uuid: generateId(),
          ingredientId: generateId(),
          type: type,
          title: title,
          text: text,
          geo: "0,0"
        };
        
        dispatch(addSpecial(data));
        setType('');
        setTitle('');
        setText('');
        navigate('/specials');
    }

    return (
        <div className='addspecial'>
            <form onSubmit={(e) => onSubmit(e)} className='addspecial__form'>
                
                <h1>Add Special</h1>

                <input type='text' placeholder='Enter Type' value={type} onChange={(e) => setType(e.target.value)}/>
                <input type='text' placeholder='Enter Title' value={title} onChange ={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder='Enter Text' value={text} onChange ={(e) => setText(e.target.value)}/>
                <div className='addspecial__button'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={() =>navigate(-1)}>Go Back</button>
                </div>
            </form>
        </div>
    )
}

export default AddSpecial
