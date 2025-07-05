import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Power BI", icon: "/icons/power-bi.svg" },
        { name: "Excel", icon: "/icons/excel.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Dart (Flutter)", icon: "/icons/flutter_icon.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "SQL Server", icon: "/icons/sql-server.svg" },
        { name: "Firebase", icon: "/icons/firebase_icon.svg" },
      ],
    },
    {
      title: "Web & UI/UX",
      skills: [
        { name: "HTML", icon: "/icons/html5.svg" },
        { name: "CSS", icon: "/icons/css3.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
      ],
    },
    {
      title: "Backend & API",
      skills: [
        { name: "Python Flask", icon: "/icons/python.svg" },
        { name: "REST API", icon: "/icons/rest-api-icon.svg" },
        { name: "JWT Authentication", icon: "/icons/jsonwebtoken.svg" },
      ],
    },
    {
      title: "Project Management",
      skills: [
        { name: "Jira (Agile)", icon: "/icons/jira.jpg" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "/icons/git.jpg" },
        { name: "GitHub", icon: "/icons/github.svg" },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className=" text-white  relative w-full min-h-screen bg-cover bg-center bg-no-repeat px-6 md:px-20 py-20 text-[#001c55]-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">{category.title}</h3>
              <ul className="grid grid-cols-3 gap-6 place-items-center">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex flex-col items-center text-center"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-1 drop-shadow" />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
