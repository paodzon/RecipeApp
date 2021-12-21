import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, clearRecipe } from "../actions/recipesActions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import moment from "moment";
import "./RecipeDetails.scss";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function RecipeDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state?.recipesData.recipeDetails);
  const specials = useSelector((state) =>state?.specialsData.specials);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipe(id));

    return () => {
      dispatch(clearRecipe());
    };
  }, []);

  if(!details){
      return <div>Loading</div>
  }


  const renderIngredients = () => {
    return details.ingredients?.map((ingredient) => {

      const event = specials?.map((special) =>{
        if(special.ingredientId === ingredient.uuid){
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Specials
              </AccordionSummary>
              <AccordionDetails>
                  <p><b>Type:</b> {special.type}</p>
                  <p><b>Title:</b> {special.title}</p>
                  <p><b>Text:</b> {special.text}</p>
              </AccordionDetails>
            </Accordion>
          );
        }
        
      })
      return (
        <tr>
          <td>{ingredient.name}<br/> {event}</td>
          <td>{ingredient.amount}</td>
          <td>{ingredient.measurement}</td>
        </tr>
      );
    });
  };

  const renderDirections = () => {
    return details.directions?.map((direction, i) => {
      const optional = direction.optional ? (<span className="badge">Optional</span>) : ("");

      return (
        <p>{i + 1}. {direction.instructions} {optional}</p>
      );
    });
  };

  return (
    <div className="recipedetails">
      <div className="recipedetails__left">
        <div className="recipedetails__goback" onClick={() => navigate(-1)}>
          <ArrowBackIosIcon /> Back
        </div>
        <h1>{details.title}</h1>
        <img
          src={`http://localhost:3001${details?.images?.full}`}
          width="550"
        />
      </div>
      <div className="recipedetails__right">
          <h2>About</h2>
        <div className="recipedetails__container">
            <h4>Description: {details.description}</h4>
            <div className="about__details">
                <div className="about__left">
                <p><span>Servings:</span> {details.servings}</p>
            <p><span>Preparation Time:</span> {details.prepTime} mins</p>
            <p><span>Cook Time:</span> {details.cookTime} mins</p>
                </div>
                <div className="about__right">
                <p><span>Date Posted:</span> {moment(details.postDate).format("MMM Do YYYY")}</p>
                <p><span>Date Edited:</span> {moment(details.editDate).format("MMM Do YYYY")}</p>
                </div>
                
            </div>
        </div>
        <h2>Ingredients</h2>
        <div className="recipedetails__container">
          <table className="ingredients__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              {renderIngredients()}
            </tbody>
          </table>
        </div>
        <h2>Directions</h2>
        <div className="recipedetails__container">
          {renderDirections()}
        </div>

      </div>
    </div>
  );
}

export default RecipeDetails;
