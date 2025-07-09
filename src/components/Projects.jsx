import React from "react";
import Slider from "react-slick";

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with shopping cart, product listing, and payment integration.",
    image: "/images/ecommerce.png",
  },
  {
    title: "BeautyCo App",
    description: "Mobile cosmetics review app with Flutter frontend and Flask backend. Includes user reviews, filters, and PostgreSQL integration.",
    sliderImages: [
      "/images/ecommerce-1.png",
      "/images/ecommerce-2.png",
      "/images/ecommerce-3.png",
    ]
  },
  {
    title: "Travel Story Website",
    description: "Personal travel blog web design showcasing locations, experiences, and image galleries.",
    image: "/images/travel.png",
  },
  {
    title: "YouTube Clone",
    description: "A simple clone of YouTube using HTML, CSS and responsive layout principles.",
    image: "/images/youtube.png",
  },
  {
    title: "Python Snake Game",
    description: "A classic snake game implemented using Python’s Tkinter library, featuring score tracking and colorful grid.",
    image: "/images/snake.png",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-[#1b1740] to-black py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="bg-[#1e1e1e] rounded-t-xl overflow-hidden shadow-2xl border border-gray-700 relative">
              <div className="bg-gray-900 h-5 flex items-center px-3 text-xs text-gray-400 justify-between">
                <span className="text-red-500">●</span>
                <span className="text-yellow-500">●</span>
                <span className="text-green-500">●</span>
              </div>

              {/* Eğer slider varsa slider göster, yoksa normal resim */}
              {project.sliderImages ? (
                <Slider {...settings}>
                  {project.sliderImages.map((img, i) => (
                    <img key={i} src={img} alt={`slide-${i}`} className="w-full h-48 md:h-56 object-cover" />
                  ))}
                </Slider>
              ) : (
                <img src={project.image} alt={project.title} className="object-cover w-full h-48 md:h-56" />
              )}
            </div>

            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm px-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
