import React from 'react';
import html from '../images/html'; 

const Skills = () => {
  return (
    <div>
      <span className="skillDesc">I am a skilled and passionate web designer with experience </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={html} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


