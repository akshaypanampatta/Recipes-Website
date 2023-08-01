import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <div>
        <img
          className="image"
          src="https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg"
          alt=""
        />
      </div>
      <div className="about-text">
        <p className="one-line">About Me</p>

        <div className='two-three-line'>
          <p className="two-line">HI, MY NAME IS </p>
          <p className="three-line">Lindsay!</p>
        </div>

        <p className="four-line">
          And Sprinkle of flavor is my little corner of the internet!
          <br/>
          
          
          <br/> I'm the voice,
          author, and creator behind Sprinkle of flavor. What started as a casual
          hobby over 10 years ago in 2010 while I was working as a fourth grade
          teacher has now grown into a full-blown business (!!) that reaches
          millions of people with fun recipes each month, with content that has
          been featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR,
          Huffington Post, The Everymom, PureWow, and more.<br/><br/> I live in Saint
          Paul, MN with my husband Bjork and our dog Sage. My favorite things in
          life are a big plate of pad Thai, sunny days, and going to the dog
          park.
        </p>
      </div>
    </div>
  );
}

export default About