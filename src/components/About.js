import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-[#c27137]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full md:grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-dashed border-white">
              About Me
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full  text-white md:text-right px-8">
            <p className="font-bold">
              <span className="text-2xl font-bold text-[#c27137]">
                Full-Stack Web Developer <br></br>
              </span>
              Getting a fresh start by diving head first into the world of software development!
              My back ground is in CNC manufacturing and industrial automation so im no stranger to
              tech and some forms of software. My current endeavor is a full-stack web development
              boot camp where ive worked in teams and solo projects with a wide range of technologies.
              Always interested in learning more, im only a call/message/email away!
            </p>
          </div>     
          <img href="./src/assets/portrait2.jpg" alt="" height="250" width="250"></img>
          <div className="max-w-[1000px] w-full font-bold mt-10 md:mt-0 px-8">
            <p className="text-2xl font-bold text-[#c27137] mb-4">Skills</p>
            <table className="border-collapse border border-slate-500">
              <thead>
                <tr >
                  <th className="border border-slate-600 px-4 py-2">Front-End</th>
                  <th className="border border-slate-600 px-4">Back-End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700 text-white px-4">React JS </td>
                  <td className="border border-slate-700 text-white px-4">Node.js </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-white px-4">HTML/CSS </td>
                  <td className="border border-slate-700 text-white px-4">Express </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-white px-4">Javascript</td>
                  <td className="border border-slate-700 text-white px-4">MySQL/Sequelize</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-white px-4">jQuery</td>
                  <td className="border border-slate-700 text-white px-4">MongoDB/Mongoose</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-white px-4">Webpack</td>
                  <td className="border border-slate-700 text-white px-4">Jest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
