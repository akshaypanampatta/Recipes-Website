import React from "react";
import "./TopRecipes.css";
import { LiaTrophySolid } from "react-icons/lia";
import { TopRecipesList } from "./TopRecipesList";

function TopRecipes() {
  return (
    <div className="toprecipes">
      <div className="heading">
        <div className="heading-trophy">
          <LiaTrophySolid className="trophy-icon" />
          <p className="top-heading">TOP RATED RECIPES</p>
        </div>

        <p className="long-text">
          Out of all the many recipes on Pinch of Yum, these are our shining
          stars - the recipes we come back to again and again (and again).
        </p>
      </div>
      <div className="total-recipes">
        {TopRecipesList.map((top) => (
          <div className="recipe">
            <img
              className="recipe-image"
              src={top.image}
            />
            <div>
              <p className="recipe-caption">
                {top.title}
              </p>
              <div className="star">
                {top.star}
              </div>

              <p className="review">{top.review}</p>
            </div>
          </div>
        ))}

        

       




       

        

        
      </div>
      <hr />
    </div>
  );
}

export default TopRecipes;
