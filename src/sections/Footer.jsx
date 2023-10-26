import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "../Constants/data";

const Footer = () => {
  return (
    <footer className="text-lightSlate py-10 border-t-2 border-slate/50 mt-10">
      <div className="flex gap-8 mb-16 mt-5">
        <div>
          <div className="text-sm font-semibold text-slate">CALL</div>
          <a
            href="call:+919977258377"
            className="text-sm sm:text-xl mt-2 block"
          >
            +91 9977258377
          </a>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate">EMAIL</div>
          <a
            href="mailto:ashisvi7519@gmail.com"
            className="text-sm sm:text-xl mt-2 block"
          >
            ashisvi7519@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center sm:flex-row justify-between gap-4">
        <div className="text-center sm:text-start sm:text-lg">
          <p>
            Built with
            <span className="text-white font-semibold"> React.js </span> and
            <span className="text-white font-semibold"> Tailwind CSS.</span>
          </p>
          <p className="mt-1">
            <span>Checkout on </span>
            <a href="" className="text-green">
              Github
            </a>
          </p>
        </div>
        <ul className="flex gap-4 justify-center items-center">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                className="hover:text-green active:text-green"
              >
                <FontAwesomeIcon icon={item.icon} className="h-[25px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
