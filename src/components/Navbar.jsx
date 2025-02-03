import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-secondary text-2xl font-bold">Titans Portfolio</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-secondary hover:text-accent">Domov</a></li>
          <li><a href="#about" className="text-secondary hover:text-accent">O mne</a></li>
          <li><a href="#projects" className="text-secondary hover:text-accent">Projekty</a></li>
          <li><a href="#contact" className="text-secondary hover:text-accent">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;