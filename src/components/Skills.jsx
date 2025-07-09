import React from "react";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "HTML5", icon: "html5.svg" },
      { name: "CSS3", icon: "css3.svg" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Flutter", icon: "flutter_icon.svg" },
      { name: "Tailwind", icon: "css3.svg" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "nodejs.jpg" },
      { name: "REST API", icon: "rest-api-icon.svg" },
      { name: "JWT", icon: "jsonwebtoken.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "SQL Server", icon: "sql-server.svg" },
    ],
  },
  {
    title: "Data & BI",
    skills: [
      { name: "Power BI", icon: "power-bi.svg" },
      { name: "Excel", icon: "excel.svg" },
    ],
  },
  {
    title: "Tools & Collaboration",
    skills: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Jira", icon: "jira.jpg" },
      { name: "Git", icon: "git.jpg" },
      { name: "GitHub", icon: "github.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-300 text-center">
        Skills
      </h2>

      <div className="w-full max-w-6xl grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cat.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-purple-500 transition"
                >
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="h-10 mb-2"
                  />
                  <p className="text-sm text-gray-100">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
