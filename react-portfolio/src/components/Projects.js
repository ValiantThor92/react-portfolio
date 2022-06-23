import React from "react";
import budgetTracker from "../assets/budget-tracker.JPG";
import group1 from "../assets/group-project.JPG";
import notes from "../assets/note-taker.JPG";
import techB from "../assets/tech-blog.JPG";
import weather from "../assets/weather-dashboard.JPG";
import dayScheduler from "../assets/work-day-scheduler.JPG";

import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-[#c27137] font-bold inline border-b-4 border-dashed border-white">Projects</p>
          <p className="font-bold text-white py-3">
            Hover over a project to see more options.
          </p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" >
            
            
            {/* SingleProject component */}
            <SingleProject projectName="Budget tracker" projectImage={budgetTracker} repo="https://github.com/ValiantThor92/budget-tracker" deployed="https://cryptic-journey-24159.herokuapp.com/"/>
            <SingleProject projectName="Lets talk recipes" projectImage={group1} repo="https://github.com/ValiantThor92/lets-talk-recipes" deployed="https://valiantthor92.github.io/lets-talk-recipes/"/>
            <SingleProject projectName="Weather Dashboard" projectImage={weather} repo="https://github.com/ValiantThor92/weather-dashboard" depolyed="https://valiantthor92.github.io/weather-dashboard/"/>
            <SingleProject projectName="Note taker App" projectImage={notes} repo="https://github.com/ValiantThor92/note-taker" deployed="https://thors-note-taker.herokuapp.com/"/>
            <SingleProject projectName="Tech Blog" projectImage={techB} repo="https://github.com/ValiantThor92/tech-blog" deployed="https://frozen-spire-87692.herokuapp.com/"/>
            <SingleProject projectName="Day Planner" projectImage={dayScheduler} repo="https://github.com/ValiantThor92/work-day-scheduler" deployed="https://valiantthor92.github.io/work-day-scheduler/index.html"/>


        </div>
      </div>
    </div>
  );
};

export default Projects;
