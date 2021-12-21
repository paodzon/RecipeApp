import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getSpecial, clearSpecial, updateSpecial } from '../actions/specialsActions';
import './EditSpecial.scss';

const EditSpecial = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const specialDetails = useSelector((state) => state?.specialsData?.specialDetails)
    const [type,setType] = useState('');
    const [title,setTitle] = useState('');
    const [text,setText] = useState('');


    useEffect(() =>{
        dispatch(getSpecial(id))
        return () =>{
            dispatch(clearSpecial());
        }
    },[])
    

    const onSubmit = (e) =>{
        e.preventDefault();
        const data = {
          uuid: id,
          ingredientId: specialDetails.ingredientId,
          geo: specialDetails.geo,
          type,
          title,
          text,
        };

        dispatch(updateSpecial(id, data));
        navigate('/specials')
    }


    return (
        <div className='editspecial'>
            <form onSubmit={(e) =>onSubmit(e)} className='editspecial__form'>
                
                <h1>Edit Special</h1>
                <input type='text' placeholder={id} disabled/>
                <input type='text' placeholder={specialDetails.type} value={type} onChange={(e) => setType(e.target.value)}/>
                <input type='text' placeholder={specialDetails.title} value={title} onChange ={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder={specialDetails.text} value={text} onChange ={(e) => setText(e.target.value)}/>
                <div className='editspecial__button'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => navigate(-1)}>Go back</button>
                </div>
            </form>
        </div>
    )
}

export default EditSpecial
