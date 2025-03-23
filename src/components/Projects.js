import React from "react";
import webSiteImg1 from "../assets/MovieHunt.png";
import webSiteImg2 from "../assets/ReactApp.png";
import webSiteImg3 from "../assets/FoodResto.png";

const Projects = () => {
  const config = {
    projects: [
      {
        id: 1,
        image: webSiteImg1,
        description: "A MovieHunt Website. Built with React js.",
        link: "https://github.com/Ramchandran06/Moviehunt_react.git",
      },
      {
        id: 2,
        image: webSiteImg2,
        description: "A ReactApp. Built with React js.",
        link: "https://ramchandran06.github.io/chandran_react_app/",
      },
      {
        id: 3,
        image: webSiteImg3,
        description: "A FoodResto Website. Built with ASP.Net",
        link: "https://github.com/Ramchandran06/FoodResto.git",
      },
    ],
  };
  return (
    <section
      id="projects"
      className="flex flex-col justify-center bg-primary px-5 py-32 text-white"
    >
      <div className="w-full ">
        <div className="flex flex-col px-10">
          <h1 className="text-4xl font-bold mb-5 border-b-4 w-[140px] border-secondary">
            Projects
          </h1>
          <p className="py-5 ">
            These are some of My best projects.I have built these with
            React,Bootstrap,CSS and ASP.Net. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col md:flex-row px-20 gap-10">
          {config.projects.map((project) => (
            <div className="relative">
              <img className="h-[200px] w-[500px]" src={project.image} alt="" />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
