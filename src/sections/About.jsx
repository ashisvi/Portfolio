const About = () => {
  return (
    <section id="about" className="grid place-content-center">
      <div className="min-w-fit sm:border-l-4 flex justify-evenly align-middle flex-wrap ">
        <div className="hidden sm:block w-1/2"></div>
        <div className="sm:w-1/2">
          <h1 className="text-3xl text-center sm:text-5xl font-bold leading-tight pb-5 pt-1">
            About me
          </h1>

          <div className="text-slate indent-10 text-lg">
            <p className="text-justify">
              I am web developer with expertise in JavaScript and React. I have
              crafted numerous projects. demonstrating my passion for creating
              exceptional web experiences. I am currently working on personal
              projects.
            </p>
            <p className="pt-3 text-justify">
              My journey doesn't end with these achievements. I'm committed to
              continuous improvement and embrace the dynamic world of web
              development by constantly upgrading my skills and learning new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
