import React from "react";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import bootstrapImg from "../assets/bootstrap.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.svg";
import cSharp from "../assets/csharp.png";
import aspNet from "../assets/asp.net.png";
import msSql from "../assets/sql.svg";
const Skills = () => {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5 ">
      <div className=" md:w-1/2 flex justify-center">
        <div className="flex flex-col mt-32  text-white">
          <h1 className="text-4xl text-center font-bold ml-5 border-b-4 border-primary w-[90px] ">
            Skills
          </h1>
          <p className="flex  justify-center m-5">
            I have experience in both front-end and back-end development,
            working with a variety of technologies to build dynamic and
            responsive web applications
          </p>
        </div>
      </div>
      <div className=" md:w-1/2 justify-center">
        <h2 className="text-white font-bold border-b-4 border-primary ml-5 mt-5 mb-5 w-[80px] ">
          Front-End
        </h2>
        <div className=" w-1/4 m-5 flex ">
          <img className="w-[100px] " src={htmlImg} />
          <img className="w-[100px] " src={cssImg} />
          <img className="w-[90px] mt-5 md:ml-10 " src={bootstrapImg} />
        </div>
        <div className=" m-5 flex">
          <img className="w-[160px]  md:ml-10" src={tailwindImg} />
          <img className="w-[140px]  md:ml-10 " src={reactImg} />
        </div>
        <h2 className="text-white font-bold border-b-4 border-primary ml-5 mt-5 mb-5 w-[80px] ">
          Back-End
        </h2>
        <div className=" w-1/4 m-5 flex md:flex-row ">
          <img className="w-[100px] " src={cSharp} />
          <img className="w-[100px] ml-5 " src={aspNet} />
        </div>
        <h2 className="text-white font-bold border-b-4 border-primary ml-5 mt-5 mb-5 w-[80px] ">
          Data Base
        </h2>
        <div className=" w-1/4 m-5 flex ">
          <img className="w-[100px] " src={msSql} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
