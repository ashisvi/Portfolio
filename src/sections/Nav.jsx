import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAV_LINKS } from "../Constants/data";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleNav = (value) => {
    setActive(value);
  };

  return (
    <>
      <nav className="w-full h-[75px] flex justify-between items-center bg-lightNavy sticky top-0 z-10">
        <a href="" className="logo py-3 text-xl font-semibold">
          <span>Port</span>
          <span className="text-green">folio</span>
        </a>
        <ul className="hidden sm:flex justify-between items-center gap-8 text-md">
          {NAV_LINKS.map((item) => (
            <li key={item.id} className="">
              <a
                href={item.url}
                className="hover:border-b hover:text-green border-b-green py-1"
              >
                {item.label}
              </a>
            </li>
          ))}
          <a
            href="resume.pdf"
            className="resume-btn py-[8px] px-[16px] border border-green text-green"
          >
            Resume
          </a>
        </ul>
        <button className="sm:hidden z-30">
          {active ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => handleNav(false)}
              className="h-[25px] outline-none"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => handleNav(true)}
              className="h-[25px] outline-none"
            />
          )}
        </button>
        <div
          className={`fixed top-0 left-[50%] right-0 bottom-0 z-20 p-5 flex flex-col justify-center bg-lightestNavy font-semibold nav-mobile ${
            active || "hidden"
          }`}
        >
          <ul className="text-center text-md">
            {NAV_LINKS.map((item) => (
              <li
                key={item.id}
                className="mb-3 last-of-type:mb-8"
                onClick={() => handleNav(false)}
              >
                <a
                  href={item.url}
                  className="hover:border-b hover:text-green border-b-green py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href="resume.pdf"
              className="resume-btn py-[8px] px-[16px] border border-green text-green"
            >
              Resume
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
