import ProjectCard from "../components/ProjectCard";
import { PROJECT_LIST } from "../Constants/data";

const Projects = () => {
  const projectList = [...PROJECT_LIST].reverse();

  return (
    <section id="projects">
      <h1 className="heading-l-1 sm:pb-5">Projects</h1>
      <div className="project-container">
        {projectList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
