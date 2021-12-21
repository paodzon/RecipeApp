import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { getSpecials } from '../actions/specialsActions';
import SpecialsCard from '../components/SpecialsCard';
import './SpecialsPage.scss';

const SpecialsPage =  () =>{

    const specials = useSelector((state) => state?.specialsData.specials);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getSpecials());
    },[])

    const renderSpecials = () => {
      if (specials) {
        return specials.map((special) => {
          return (
            <SpecialsCard
              key={special.uuid}
              id={special.uuid}
              type={special.type}
              title={special.title}
              text={special.text}
            />
            
          );
        });
      }
    };

    return (
      <div className="specialspage">
        <div className="specialspage__header">
          <div className="specialspage__title">
            <h1>Specials</h1>
          </div>
          <div className="specialspage__add">
            <Link to='/addspecial'><button>Add Special</button></Link>
          </div>
        </div>

        <div className="specialspage__specials">
        {renderSpecials()}
        </div>
      </div>
    );
}

export default SpecialsPage;