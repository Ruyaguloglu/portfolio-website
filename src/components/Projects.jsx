import React from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projectList = [
    {
      title: "Snake Game (Python)",
      description: "A classic snake game built using Python's Tkinter library.",
      image: "/images/snake.png",
      technologies: ["Python", "Tkinter"],
      features: [
        "Custom UI with canvas",
        "Score tracking and high score",
        "Game-over logic",
        "Modular code structure",
      ],
      github: "https://github.com/Ruyaguloglu/SNAKE-GAME#readme",
    },
    {
      title: "YouTube Clone (HTML/CSS)",
      description: "A frontend-only YouTube clone with responsive design.",
      image: "/images/youtube.png",
      technologies: ["HTML", "CSS", "Flexbox"],
      features: [
        "Custom navigation bar",
        "Video cards layout",
        "Responsive grid system",
      ],
      github: "https://github.com/Ruyaguloglu/YoutubeApp#readme",
    },
    {
      title: "E-Commerce App (Android)",
      description: "An e-commerce Android app built in Java with Firebase.",
      image: "/images/ecommerce.png",
      technologies: ["Java", "Android Studio", "Firebase"],
      features: [
        "Login & registration",
        "Product listing UI",
        "Add-to-cart logic",
        "Cloud image upload",
        "Realtime database integration",
      ],
      github: "https://github.com/Ruyaguloglu/ProjectApp#readme",
    },
    {
      title: "Voice Recorder (Python)",
      description: "A simple desktop voice recorder app built in Python.",
      image: "/images/recorder.png",
      technologies: ["Python", "sounddevice", "tkinter"],
      features: [
        "Real-time audio recording",
        "WAV file export",
        "Minimalistic user interface",
      ],
      github: "https://github.com/Ruyaguloglu/VoiceRecorder#readme",
    },
    {
      title: "GIF Maker (Python)",
      description: "Converts image sequences into animated GIFs.",
      image: "/images/gifmaker.png",
      technologies: ["Python", "Pillow", "Tkinter"],
      features: [
        "Image selection UI",
        "Adjustable frame duration",
        "GIF export functionality",
      ],
      github: "https://github.com/Ruyaguloglu/GIFmaker#readme",
    },
    {
      title: "Travel Story Platform (MERN)",
      description: "Full-stack social app for sharing travel stories.",
      image: "/images/travel.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      features: [
        "User authentication with JWT",
        "Responsive frontend with React Router",
        "RESTful API design",
        "Photo & text post creation",
        "Comment system",
      ],
      github: "https://github.com/Ruyaguloglu/TRAVEL-STORY-MERN#readme",
    },
    {
      title: "BeautyCo (Graduation Project)",
      description: "A mobile-first cosmetics review platform built by a team of 4.",
      image: "/images/beautyco.png",
      technologies: ["Flutter", "Flask", "PostgreSQL", "JWT"],
      features: [
        "Login / Sign Up screen",
        "Home, Search and Create Post screens",
        "Product Detail with reviews and ratings",
        "User profile with post history",
        "Backend API with Postman testing",
        "Collaborative Git & team planning",
      ],
      github: "https://github.com/Ruyaguloglu/BeautyCo-API#readme",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <motion.section
      id="projects"
      className="bg-black text-white px-4 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <Slider {...settings}>
          {projectList.map((project, index) => (
            <div key={index}>
              <div className="bg-zinc-900 shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300 mt-2 text-sm">{project.description}</p>

                  <ul className="list-disc list-inside mt-3 text-gray-400 text-sm space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    <FaGithub /> View GitHub README
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Projects;
