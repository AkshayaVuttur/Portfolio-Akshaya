/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import project1Image from "../images/project1.jpeg";
import project2Image from "../images/project2.jpg";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/project.jpg";

//const imageAltText = "desktop with books and laptop";
//<img
//src={image}
//style={{ height: "90%", width: "100%", objectFit: "cover" }}
//alt={imageAltText}
///>

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
/* {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
    "/workspaces/Portfolio-Akshaya/src/images/project2.PNG"
  }, */
const projectList = [
  {
    title: " Web Shop",
    description:
      " This is a e-commerce project that has features product selection by category and online order tracking for a seamless shopping experience.",
      img: project2Image,
  },
  {
    title: " Interactive Quiz website",
    description:
      "Designed an interactive quiz app using HTML, CSS, and JavaScript to provide a user-friendly platform for testing knowledge across categories, offering a score in percentage based on performance within a set time.",
      img: project1Image,
  }
 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color:"white" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>     
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <img src={project.img} alt={project.title} style={{ width: "220px",height:"150px", border:"1px solid grey", borderRadius:"20px", marginLeft:"10%"}} />
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
