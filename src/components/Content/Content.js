import React from "react";
import "./Content.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ContentList, RoundImageList } from "./ContentList";

function Content() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate("/recipes");
  };
  return (
    <div className="content">
      <div className="pictures">
        {ContentList.map((content) => (
          <div className="main-image">
            <img
              className="vegimage"
              src={content.image}
              style={{ marginBottom: "10px", width: "270px", height: "370px" }}
            />
            <p className="veg">{content.name}</p>
          </div>
        ))}
      </div>

      <div className="roundimages">
        {RoundImageList.map((round) => (
          <div className="image-wrapper">
            <div className="image-container">
              <img src={round.image} />
            </div>
            <div style={{ marginLeft: "0.1rem" }} className="image-caption">
              {round.name}
            </div>
          </div>
        ))}
      </div>

      <div className="searchbar-button ">
        <div className="inputfield">
          <input
            className="searchbar"
            placeholder="Search our recepis"
            type="text"
          />
          <FaSearch className="search-icon" />
        </div>
        <div>
          <p className="ortext">or</p>
        </div>
        <div >
          <button onClick={onclick} className="button ">
            + VIEW ALL RECIPES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
