import React from "react";
import "./RelatedBlog.css";

function RelatedBlog() {
  return (
    <div className="blog">
      <div className="blog-content">
        <p className="textname">HI! I'M LINDSAY.</p>
        <p className="textwelcome">nice to meet you</p>
        <p className="textt">
          I’m a former 4th grade teacher, now full time blogger. My husband
          Bjork and I live in Minnesota. Favorite things include my camera, lake
          days, and dark chocolate.
        </p>
      </div>
      <div className="images">
        <img
          className="image1"
          src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen-380x480.jpg"
        />
      </div>
      <div className="images">
        <img
          className="image2"
          src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour-380x480.jpg"
        />
      </div>
    </div>
  );
}

export default RelatedBlog;
