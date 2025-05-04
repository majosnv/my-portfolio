import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryProject, setCurrentGalleryProject] = useState('project3');

// Galéria obrázkov pre projekt 2
const project2GalleryImages = [
  "/project2_1.png",
  "/project2_2.png",
  "/project2_3.png",
  "/project2_4.png",
  "/project2_5.png",
];

  // Galéria obrázkov pre projekt 3
  const project3GalleryImages = [
    "/project3_1.png",
    "/project3_2.png",
    "/project3_3.png",
    "/project3_4.png",
    "/project3_5.png"
  ];

  // Funkcia na získanie aktuálnych obrázkov galérie podľa projektu
  const getCurrentGalleryImages = () => {
    return currentGalleryProject === 'project2' ? project2GalleryImages : project3GalleryImages;
  };

  // Funkcia na otvorenie galérie
  const openGallery = (projectId) => {
    setCurrentGalleryProject(projectId);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  // Funkcia na navigáciu medzi obrázkami
  const navigateGallery = (direction) => {
    const images = getCurrentGalleryImages();
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  // Funkcia na zatvorenie galérie
  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const projects = [
    {
      title: "oym.sk - OPEN YOUR MIND",
      description: (
        <>
          Moderná react aplikácia zameraná na osobný rozvoj
          <a 
            href="https://github.com/majosnv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 ml-2 inline-flex items-center"
            aria-label="GitHub Repository"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </>
      ),
      image: "/project1.png",
      url: "https://oym.netlify.app/",
      tech: [
        { name: 'React', icon: 'logos:react' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'emailJS', icon: 'simple-icons:maildotru', color: '#5A5EB9' }
      ]
    },

    {
      title: "Webová aplikácia zameraná na realizáciu logopedických cvičení",
      description: (
        <>
          Bakalárska práca zameraná na zlepšenie a terapeutických nástrojov
          <a 
            href="https://github.com/majosnv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 ml-2 inline-flex items-center"
            aria-label="GitHub Repository"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </>
      ),
      image: "/project2_1.png",
      url: "https://www.linkedin.com/in/mariopanenko/details/projects/",
      hasGallery: true, // Pridané pre druhý projekt
      galleryId: 'project2', // Identifikátor galérie
      tech: [
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'Swagger', icon: 'simple-icons:swagger', color: '#85EA2D' },
        { name: 'GCP', icon: 'logos:google-cloud' }
      ]
    },
    
    {
      title: "Aplikácia pre slovne-orientované logopedické terapie",
      description: (
        <>
          Diplomová práca zameraná na vývoj interaktívnej aplikácie logopedické terapie
          <a 
            href="https://github.com/majosnv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 ml-2 inline-flex items-center"
            aria-label="GitHub Repository"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </>
      ),
      image: "/project3_1.png",
      url: "https://www.linkedin.com/in/mariopanenko/details/projects/",
      hasGallery: true,
      galleryId: 'project3', // Identifikátor galérie
      tech: [
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'GCP', icon: 'logos:google-cloud' }
      ]
    },
  ];

  const skills = [
    { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
    { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'React', icon: 'logos:react' },
    { name: 'Next.js', icon: 'logos:nextjs-icon' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    { name: 'Python', icon: 'logos:python' },
    { name: 'Git / GitHub', icon: 'logos:git-icon' },
    { name: 'PHP', icon: 'logos:php' },
    { name: 'MySQL', icon: 'logos:mysql' },
    { name: 'FastAPI', icon: 'simple-icons:fastapi', color: '#05998b' },
    { name: 'Docker', icon: 'logos:docker-icon' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            <span className="text-white">panenko</span>
            <span className="text-blue-600 relative underline-3d">.sk</span>
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-2xl text-gray-300 hover:text-white underline-animation">O mne</a>
            <a href="#work" className="text-2xl text-gray-300 hover:text-white underline-animation">Projekty</a>
            <a href="#footer" className="text-2xl text-gray-300 hover:text-white underline-animation">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden"
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          <motion.div
            variants={{
              open: { 
                opacity: 1,
                height: "auto",
                transition: { 
                  duration: 0.3,
                  ease: "easeInOut"
                }
              },
              closed: { 
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 space-y-6">
              <a href="#about" className="block text-xl text-gray-300 hover:text-white">O mne</a>
              <a href="#work" className="block text-xl text-gray-300 hover:text-white">Projekty</a>
              <a href="#footer" className="block text-xl text-gray-300 hover:text-white">Kontakt</a>
            </div>
          </motion.div>
        </motion.div>

      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 border-b border-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 flex justify-center"
          >
            <img 
              src="/ja.png" 
              alt="Profile"
              className="w-96 h-96 rounded-full shadow-xl hover:shadow-blue-600/30 transition-shadow duration-300"
            />
          </motion.div>

          {/* Animated floating shapes */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-blue-600/20 rounded-full"
                style={{
                  width: `${Math.random() * 50 + 30}px`,
                  height: `${Math.random() * 50 + 30}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, 50, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-4 underline-animation relative"
          >
            <span className="inline-block">Front-end developer</span>
            <motion.span 
              className="block mt-2 text-blue-600"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
            >
              <span className="inline-block transform rotate-12">🚀</span>
              Vývojovaný na dokonalosť
              <span className="inline-block transform -rotate-12">✨</span>
            </motion.span>
          </motion.h1>


          <motion.p 
            className="text-gray-400 text-xl max-w-2xl mx-auto relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vývojujem škálovateľné webové aplikácie s modernými technologickými stackmi a AI implementáciami
            <span className="inline-block ml-2 animate-pulse">⚡</span>
          </motion.p>


          <motion.div
            className="mt-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#work"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg
              transform transition-all duration-300 hover:scale-105
              border-b-4 border-blue-700 hover:border-b-0 hover:translate-y-1
              shadow-lg hover:shadow-blue-600/30
              active:border-b-0 active:translate-y-1"
            >
              Zobraziť moje projekty
            </a>
          </motion.div>
        </div>

      </motion.section>

      {/* About Me Section */}
      <section id="about" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">
            <span className="underline-3d">O mne</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-400 text-lg">
                Ahoj, volám sa Mário Panenko, som frontend developer so zápalom pre tvorbu moderných 
                webových aplikácií. Špecializujem sa na React a vývoj používateľsky prívetivých 
                riešení.
              </p>
              <p className="text-gray-400 text-lg">
                Môj záujem o počítače sa prejavil už vo veľmi mladom veku. Môj prvý programátorský projekt bol, keď som mal 13-14 rokov. Bol to herný portál s názvom BlueZone.sk, ktorý hostoval CS 1.6 servery. Vytvoril som webové fórum a stránku pomocou PHP-Fusion, neskôr WordPress. Platforma podporovala pridávanie pluginov ako návštevníci a témy, čo ju robilo prispôsobiteľnou a funkčnou.
              </p>
              <p className="text-gray-400 text-lg">
                Keď práve neprogramujem, venujem sa silovému cvičeniu v posilovni a v letnom období jazde na motorke 😄. Tieto aktivity mi pomáhajú udržiavať rovnováhu medzi profesionálnym a osobným životom, pričom zároveň rozvíjam svoje zručnosti.
              </p>
            </div>

            {/* Animated Profile Image */}
            <motion.div 
              className="flex justify-center items-center"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.img 
                src="/profile.jpg"
                alt="Profile"
                className="w-64 h-64 rounded-full border-4 border-blue-600 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/30"
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)"
                }}
              />
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="underline-3d">Technické skilly</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
                    transition: { duration: 0.2, delay: 0 }
                  }}
                  className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-600 transition-colors group relative"
                >
                  <div className="flex flex-col items-center">
                    <Icon 
                      icon={skill.icon} 
                      className="text-4xl mb-2 transition-all duration-200 group-hover:text-blue-600 group-hover:scale-110" 
                      style={{ color: skill.color || 'inherit' }}
                    />
                    <span className="text-white font-medium text-base">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            <span className="underline-3d">Moje Projekty</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl border border-gray-700 h-full overflow-hidden"
              >
                {/* Pre projekty s galériou zobrazíme tlačidlo na otvorenie galérie */}
                {project.hasGallery ? (
                  <div className="relative">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 md:h-96 object-cover cursor-pointer transform transition duration-500 hover:scale-105"
                      />
                    </a>
                    <button
                      onClick={() => openGallery(project.galleryId)}
                      className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg 
                      hover:bg-blue-700 transition-colors duration-300 flex items-center"
                    >
                      <Icon icon="mdi:image-multiple" className="mr-2" />
                      Zobraziť galériu
                    </button>
                  </div>
                ) : (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-96 object-cover cursor-pointer transform transition duration-500 hover:scale-105"
                    />
                  </a>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center bg-gray-700 px-3 py-1 rounded-full"
                      >
                        <Icon 
                          icon={tech.icon} 
                          className="w-5 h-5 mr-1"
                          style={{ color: tech.color || 'inherit' }}
                        />
                        <span className="text-sm text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Socials */}
      <footer id="footer" className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-8"
            >
              <span className="underline-3d">Kontaktujte ma cez</span>
            </motion.h3>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a 
                href="https://www.linkedin.com/in/mariopanenko/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <Icon icon="logos:linkedin-icon" className="w-10 h-10" />
              </a>
              <a 
                href="https://github.com/majosnv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <Icon icon="logos:github-icon" className="w-10 h-10" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <Icon icon="carbon:document" className="w-10 h-10" />
              </a>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 text-lg"
            >
              &copy; {new Date().getFullYear()} panenko.sk. Všetky práva vyhradené.
            </motion.p>
          </div>
        </div>
      </footer>

      {/* Modálne okno pre galériu */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeGallery}
          >
            <motion.div 
              className="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Obrázok */}
              <motion.img 
                src={getCurrentGalleryImages()[currentImageIndex]} 
                alt={`Galéria obrázok ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Navigačné tlačidlá - zväčšené a lepšie umiestnené pre mobily */}
              <div className="absolute top-1/2 -left-3 -right-3 sm:left-0 sm:right-0 flex justify-between transform -translate-y-1/2 px-2">
                <button 
                  className="bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateGallery('prev');
                  }}
                >
                  <Icon icon="mdi:chevron-left" className="text-xl sm:text-2xl" />
                </button>
                <button 
                  className="bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateGallery('next');
                  }}
                >
                  <Icon icon="mdi:chevron-right" className="text-xl sm:text-2xl" />
                </button>
              </div>
              
              {/* Indikátor sledovaných obrázkov - zväčšený pre lepšiu interakciu na mobiloch */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-3 py-2">
                {getCurrentGalleryImages().map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx ? 'bg-blue-600 scale-125' : 'bg-gray-400'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                  />
                ))}
              </div>
              
              {/* Zatvoriť - zväčšené pre lepšiu interakciu na mobiloch */}
              <button 
                onClick={closeGallery}
                className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors shadow-lg"
              >
                <Icon icon="mdi:close" className="text-lg sm:text-xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;