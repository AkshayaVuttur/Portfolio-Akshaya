import React from 'react';
import   './Skills.css';

//import {htmlll} from '../images/htmlll.png'; <img src={htmlll} alt="UIDesign" className="skillBarImg" /> 

const Skills = () => {
  return (
    <div className='main'>
     <span className="skillDesc">Skills </span>
     <div className='First'>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>HTML</h2>
            <p>HTML structures web content for browsers</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>CSS styles web pages, enhancing presentation.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Javascript</h2>
            <p> JavaScript enables dynamic, interactive web functionality.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>React Js</h2>
            <p>React JavaScript builds interactive user interfaces.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Tailwind CSS</h2>
            <p>Tailwind CSS provides utility-first styling framework.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;


