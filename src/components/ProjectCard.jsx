import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex max-w-fit items-start gap-2 shadow-md shadow-navy my-10"
      key={project.id}
    >
      <div className="w-1/2">
        <img src={project.image} alt={project.label} />
      </div>
      <div className="p-3 w-1/2">
        <h2 className="text-2xl text-lightSlate font-bold mb-3">
          {project.label}
        </h2>
        <p className="text-slate">{project.description}</p>
        <div className="my-5">
          {project.technologies.map((item, i) => (
            <span
              key={i}
              className="mr-3 px-3 py-[5px] border border-green text-green text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 mx-5 flex gap-5 justify-end">
          <a href={project.code} className="hover:text-green">
            <FontAwesomeIcon icon={faGithub} className="h-[21px]" />
          </a>
          <a href={project.demo} className="hover:text-green">
            <FontAwesomeIcon icon={faExternalLink} className="h-[21px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
