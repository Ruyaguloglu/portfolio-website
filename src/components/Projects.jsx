import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    descriptions: [
      "An e-commerce Android application built in Java with Firebase.",
      " Login & registration",
      " Product listing UI",
      " Add-to-cart logic",
      " Cloud image upload",
      "Realtime database integration"
    ],
    image: "/images/ecommerce.png",
    category: "Mobile App",
    tags: ["Java", "Android Studio", "Firebase"]
  },
  {
    id: 2,
    title: "BeautyCo Graduate Project",
    descriptions: [
      "Mobile cosmetics review app with Flutter frontend and Flask backend.",
      " User registration and login",
      " Review system with ratings",
      " Filter cosmetics by category",
      " PostgreSQL integration",
      " Admin dashboard"
    ],
    images: ["/images/ecommerce-1.png", "/images/ecommerce-2.png", "/images/ecommerce-3.png"],
    category: "Mobile App",
    tags: ["Flutter", "Flask", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Travel Story Website",
    descriptions: [
      "A personal travel blog showcasing places and stories.",
      "Responsive layout",
      "Image galleries",
      "Location highlights",
      "Scroll animations"
    ],
    image: "/images/travel.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "YouTube Clone",
    descriptions: [
      "A simplified YouTube clone for frontend practice.",
      " Static video grid layout",
      " Mobile responsive design",
      " Sidebar and header",
      " Pure HTML and CSS"
    ],
    image: "/images/youtube.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "Responsive"]
  },
  {
    id: 5,
    title: "Python Snake Game",
    descriptions: [
      "A classic snake game using Python’s Tkinter library.",
      " Real-time snake movement",
      " Score tracking",
      " Colorful grid UI",
      " Game-over logic"
    ],
    image: "/images/snake.png",
    category: "Game Development",
    tags: ["Python", "Tkinter", "Game Logic"]
  },
  {
    id: 6,
    title: "GIF Maker (GIF Generator)",
    descriptions: [
      "A Python app to convert image sequences into animated GIFs.",
      " Select multiple images",
      " Adjust frame duration",
      " Preview and export GIF",
      " Built with Tkinter and PIL"
    ],
    image: "/images/gifmaker.png", // görseli varsa buraya koy
    category: "Python Tool",
    tags: ["Python", "Tkinter", "PIL"]
  },
  {
    id: 7,
    title: "Voice Recorder",
    descriptions: [
      "A simple voice recorder built with Python.",
      " Start/stop audio recording",
      " Save audio as .wav files",
      " Visual feedback during recording",
      " GUI using Tkinter"
    ],
    image: "/images/voicerecorder.png", // görsel varsa
    category: "Python Tool",
    tags: ["Python", "Tkinter", "pyaudio"]
  }
];



const categoryCounts = projects.reduce((acc, project) => {
  acc["All works"] = (acc["All works"] || 0) + 1;
  acc[project.category] = (acc[project.category] || 0) + 1;
  return acc;
}, {});

const categories = Object.entries(categoryCounts).map(([name, count]) => ({
  name,
  count,
}));

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All works");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const getVisibleProjects = () => {
    const start = currentSlide * 3;
    return projects.slice(start, start + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <header className="flex items-center justify-between p-6 bg-black bg-opacity-20 backdrop-blur-sm">
        <div />
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-sm opacity-80">Currently available</span>
        </div>
      </header>

      <main className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {getVisibleProjects().map((project) => (
              <div key={project.id} className="group cursor-pointer w-full max-w-sm mx-auto">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images ? project.images[0] : project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-purple-600 text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.descriptions && (
                      <ul className="text-gray-300 mb-4 text-sm leading-relaxed list-disc list-inside space-y-1">
                        {project.descriptions.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <button onClick={prevSlide} className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mb-12">
            {Array.from({ length: Math.ceil(projects.length / 3) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-purple-500' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`group text-center transition-all duration-300 hover:scale-105 ${activeCategory === category.name ? 'text-purple-300' : 'text-gray-300'}`}
              >
                <div className="text-3xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {category.count}
                </div>
                <div className="text-lg font-medium">
                  {category.name}
                </div>
                <div
                  className={`h-1 w-full mt-2 rounded-full transition-all duration-300 ${activeCategory === category.name ? 'bg-purple-500' : 'bg-gray-600 group-hover:bg-purple-400'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Decorative Elements */}
      <div className="fixed top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20 animate-pulse" />
      <div className="fixed top-1/2 right-10 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Portfolio;