import React from "react";
import AboutImg from "../assets/About.jpg";

const About = () => {
  const config = {
    line1:
      "Hi, I'm Chandrasoodan, a passionate and dedicated Full-Stack .NET Developer with expertise in both frontend and backend technologies. I thrive on creating dynamic and user-friendly web applications that provide seamless experiences.",
    line2:
      "On the frontend, I specialize in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js to build responsive, modern, and accessible user interfaces. On the backend, I work with C#, ASP.NET, and databases like MS SQL to develop robust and scalable server-side solutions.",
    line3:
      "I am also proficient in using Git for version control to collaborate efficiently and maintain clean, manageable code throughout the development process.",
  };
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-secondary px-5 "
    >
      <div className="md:w-1/2 flex justify-center">
        <img className="w-1/2 py-5 md:py-32 " src={AboutImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl  font-bold border-b-4 border-primary mb-5 w-[170px] ">
            About Me
          </h1>
          <p className="py-5">{config.line1}</p>
          <p className="py-5">{config.line2}</p>
          <p className="py-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
