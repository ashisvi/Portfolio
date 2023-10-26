import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="rounded overflow-hidden flex w-full items-start gap-2 shadow-lg shadow-navy bg-lightestNavy my-10"
      key={project.id}
    >
      <div className="hidden sm:block w-1/2 h-full bg-gradient-to-r from-fuchsia-500 to-red-400">
        <img src={project.image} alt={project.label} className="h-full" />
      </div>
      <div className="p-5 w-full sm:p-3 sm:w-1/2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl text-lightSlate font-bold">
            {project.label}
          </h2>
          <div className="flex gap-5 justify-end">
            <a href={project.code} className="hover:text-green">
              <FontAwesomeIcon icon={faGithub} className="h-[21px]" />
            </a>
            <a href={project.demo} className="hover:text-green">
              <FontAwesomeIcon icon={faExternalLink} className="h-[21px]" />
            </a>
          </div>
        </div>
        <p className="text-slate">{project.description}</p>
        <div className="flex flex-wrap">
          {project.technologies.map((item, i) => (
            <span
              key={i}
              className="mt-3 mr-3 px-3 py-[5px] border border-green text-green text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
