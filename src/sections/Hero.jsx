import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section>
      <h1 className="text-[3.5rem] font-extrabold leading-snug -mt-10 lg:mt-auto">
        Hello, I'm Ashish Vishwakarma
        <br />
        Welcome to my personal Portfolio.
      </h1>
      <p className="text-xl text-slate mt-5 max-w-2xl">
        I am a web developer with expertise in JavaScript and ReactJS. I have
        built numerous projects, demonstrating my passion for creating
        exceptional web experiences.
      </p>
      <a href="#about" className="btn mt-10 mb-3 inline-block">
        About me
        <FontAwesomeIcon icon={faArrowRightLong} className="pl-3" />
      </a>
    </section>
  );
};

export default Hero;
