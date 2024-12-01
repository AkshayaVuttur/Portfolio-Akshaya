/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import Skills from "./Skills";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/profile.jpeg";

//const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a beginner in front-end developement and i love to learn and build projects and excited to continue improving my skills every day.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
/*const skillsList = [
  "HTML- Hyper Text Markup Language",
  "CSS- Cascading Style sheets",
  "Javascript",
  "Js Framework : React.Js",
  "CSS framework : Tailwind",
];*/

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 * <img className="background" src={image} alt={imageAltText} />
 */
const detailOrQuote =
  "I am passionate about designing websites in new creative ways to drive innovation.";

const About = () => {
  return (
    <section className="padding" id="about" >
     
      <div
        style={{
          width: "40%",
          padding: "2rem",
          margin: "auto",
          textAlign: "center",
          color: "white",
          border : "1px solid #6c757d ",
        }}
      >
        <div className="imagediv">
        <img src={image} alt="profile"style={{ width: "150px" , height:"150px"}}></img>
        <h2 style={{ padding: "40px 40px 40px 150px" }}>About Myself</h2>
        </div>
        <p className="large">{description}</p>
        <p className="large">{detailOrQuote}</p>
   </div>
   <div>
      <Skills/>
   </div>
    </section>
  );
};

export default About;
