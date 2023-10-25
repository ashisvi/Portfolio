import { NAV_LINKS } from "../Constants/data";

const Nav = () => {
  return (
    <nav className="w-full h-[75px] flex justify-between items-center bg-lightNavy sticky top-0 z-10">
      <a href="/" className="logo py-3 text-xl font-semibold">
        <span>Port</span>
        <span className="text-green">folio</span>
      </a>
      <ul className="flex justify-between items-center gap-8 text-md">
        {NAV_LINKS.map((item, i) => (
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
    </nav>
  );
};

export default Nav;
