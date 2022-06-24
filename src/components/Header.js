import { useState } from "react";
import DP from "../assets/portrait.jpg";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaFileAlt
} from "react-icons/fa";
import {Link} from "react-scroll";

const Header = () => {
  const [navMode, setNavMode] = useState(false);

  function toggleNav() {
    setNavMode(!navMode);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#FFFFFF] font-bold border-b-2 border-solid border-[#c27137]">
      {/* My picture  */}
      <div>
        <img className="border-4 border-[#c27137]"
          src={DP}
          alt="portrait"
          style={{ width: "55px", height: "auto", borderRadius: "50%" }}
        />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#c27137]"><Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="hover:text-[#c27137]"><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className="hover:text-[#c27137]"><Link to="projects" smooth={true} duration={500}>
          Projects
        </Link></li>
        <li className="hover:text-[#c27137]"><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/* Collapsed menu icon */}
      <div className="md:hidden z-10" onClick={toggleNav}>
        {navMode ? <FaTimes /> : <FaBars />}
      </div>

      {/* Collapsed menu option */}
      <ul
        className={
          navMode
            ? "absolute top-0 left-0 w-full h-screen bg-[#1b0707] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={toggleNav} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={toggleNav} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={toggleNav} to="projects" smooth={true} duration={500}>
          Projects
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={toggleNav} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        <li className="py-6 text-4xl"><a href="../assets/resume.pdf">Resume</a></li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "pink", border: "1px solid pink"}}>
            <a href="https://github.com/ValiantThor92" className="flex justify-between items-center w-full">
              GitHub <span style={{color: "white"}}><FaGithub size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#2d7dd2", border: "1px solid #2d7dd2"}}>
            <a href="https://www.linkedin.com/in/travis-nelson-623aa5227/" className="flex justify-between items-center w-full">
              LinkedIn <span style={{color: "blue"}}><FaLinkedin size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#2EFF2E", border: "1px solid #2d7dd2"}}>
            <a href="https://stackoverflow.com/users/17692333/travis-nelson?tab=profile" className="flex justify-between items-center w-full">
              Stack<br/>
              Overflow <span style={{color: "orange"}}><FaStackOverflow size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#C2714F", border: "1px solid #C2714F"}}>
            <a href="https://drive.google.com/file/d/1jd5xMSS83IdxXYVP2x_2YKAxjAmHHswa/view" className="flex justify-between items-center w-full">
              Resume <span style={{color: "red"}}><FaFileAlt size={30}/></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;