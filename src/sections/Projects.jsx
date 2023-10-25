import ProjectCard from "../components/ProjectCard";
import { PROJECT_LIST } from "../Constants/data";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="heading-l-1 pb-5">Projects</h1>
      <div className="project-container">
        {PROJECT_LIST.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
