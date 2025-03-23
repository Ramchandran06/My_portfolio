import React from "react";
import HeroImg from "../assets/hero.png";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: "Iam a Full-stack developer ",
    social: {
      linkedin:
        "https://www.linkedin.com/in/chandransoodan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYWE4XhQ2RVqKvoGy82rH0w%3D%3D",
      github: "https://github.com/Ramchandran06",
      
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="w-1/2 text-white text-6xl font-hero-font">
          Hi, <br />
          I'm <span className="text-red-500 ">Chandrasoodan</span>
          <p className="text-2xl">{config.subtitle} </p>
        </h1>
        <div className="flex py-10">
          <a
            href={config.social.linkedin}
            target="_blank"
            className="pr-5 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href={config.social.github}
            target="_blank"
            className="pr-5  hover:text-white"
          >
            <AiOutlineGithub size={40} />
          </a>
          
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="" />
    </section>
  );
};

export default Hero;
