/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";

import PropTypes from "prop-types";
import image from "../images/dp1.jpg"
import   './Skills.css';
/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/Background.avif" <img className="background" src={image} alt="" />;



const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height"  >   
      <div  style={{ position: "absolute", top: "5rem", left: "2rem", width: "40rem", display:"flex", flexDirection : "row",  margin :"10%", paddingLeft:"20%"}}>
      <div>
        <img src={image}  alt="dp1" style={{ width: "250px" , height:"250px" , border : "1px solid grey", borderRadius:"50%"}}></img>
        </div>
        <div>
        <h1 style={{ color: " white" , fontSize : "80px" , paddingLeft:"2%", width:"80vw", paddingTop:"60px"}}>{name}</h1>
        <h2 style={{ color: " white" , paddingLeft:"9%"}}>{title}</h2>
        </div>
        
      </div>
     
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
