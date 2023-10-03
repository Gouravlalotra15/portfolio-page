import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-items grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Gourav</h1>
          <p className="capitalize text-3xl tracking-wide text-slate-700 mt-5">
            Front-End Developer
          </p>
          <p className="capitalize mt-4 text-lg tracking-wide text-slate-700">
            turning ideas into code
          </p>
          <div className="flex gap-x-5 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg-96"></img>
        </article>
      </div>
    </div>
  );
};

export default Hero;
