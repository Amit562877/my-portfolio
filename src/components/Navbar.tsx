// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            My Portfolio
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <div className={`flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in ${navOpen ? 'block' : 'hidden'} mobileonly`}>
          <Link href="#intro">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Intro</span>
          </Link>
          <Link href="#services">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Services</span>
          </Link>
          <Link href="#technology">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Technology</span>
          </Link>
          <Link href="#team">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Team</span>
          </Link>
          <Link href="#work">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Work</span>
          </Link>
          <Link href="#contact">
            <span className="block px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
