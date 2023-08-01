import React from "react";
import "./Recipes.css";
import { FaSearch } from "react-icons/fa";

function RecipesSection() {
  return (
    <div className="recipes">
      <div className="texts">
        <p className="text-one">Recipes</p>
        <p className="text-two">
          We’ve organized these recipes every way we could think of so you don't
          have to! Dietary restrictions, weeknight dinners, meal prep recipes,
          some of our most tried-and-true… no matter how you browse, we’re sure
          you’ll find just what you were looking for.
        </p>
      </div>

      <div className="inputfield-two">
        <input className="input-two" type="text" placeholder="Search by keyword" /><button className="button-two"><FaSearch/></button>
        
      </div>
    </div>
  );
}

export default RecipesSection;
