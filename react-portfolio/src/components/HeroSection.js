import React from "react";
import {Link} from "react-scroll";


const HeroSection = () => {

  return (
    <div name="home" className="w-full h-screen">

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p
          style={{ color: "#C27137", fontSize: "large" }}
          className="font-bold"
        >
          Hi, I am Travis Nelson...
        </p>
        <h1
          style={{ color: "white", fontFamily: "Source Sans Pro', sans-serif" }}
          className="text-4xl sm:text-7xl font-bold py-4 mx-6"
        >
          ...Full stack software developer!
        </h1>
        <p
          style={{ color: "#C27137", fontSize: "large" }}
          className="font-bold"
        >
          Check out what I have to offer.
        </p>

        <button
        style={{
          border: "1px solid #C27137",
          backgroundColor: "black",
          color: "white",
          width: "180px",
          marginLeft: "auto"
        }} className="px-6 py-3 my-8 flex items-center"
      >
        <Link to="projects" smooth={true} duration={500}>
          My Projects
        </Link>
      </button>
      </div>

     
      
    </div>
  );
};

export default HeroSection;