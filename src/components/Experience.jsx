import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
 
  {
    title: "Coding School - 42 Istanbul ",
    date: " August 2023 - October 2023",
    location: "Istanbul, Türkiye",
    details: [
      "Intensive, project-based training focused on low-level programming using C and Unix/Linux systems.",
      "Learned memory management, file I/O, and pointer arithmetic.",
      "Built applications without using standard libraries, relying solely on system calls and terminal tools.",
      "Gained hands-on experience with shell scripting, Git CLI, and process management via terminal."
    ]
  } , 
{
    title: "Participant - YGA Summit 2022",
    date: "December 2022 - 3 Days ",
    location: "Istanbul , Türkiye ",
    details: [
      "Selected from thousands of applicants for a high-impact innovation and leadership event.",
      "Engaged in interactive panels and workshops with global experts.",
      "Gained deep insights into AI, innovation, and global leadership.",
      "Developed critical thinking, empathy, and vision."
    ]
  },
{
    title: "Intern - CREADATA",
    date: "June 2023 – August 2023",
    location: "Remote",
    details: [
      "Worked with Power BI for data visualization.",
      "Cleaned and analyzed data using Excel.",
      "Created dashboards based on marketing KPIs.",
      "Designed infographic-style visuals using Figma."
    ]
  },
 {
    title: "Intern - Bayegan IT Department",
    date: "Dec 2024 – Feb 2025",
    location: "Istanbul, Türkiye",
    details: [
      "Observed Cisco and Microsoft 365 network systems.",
      "Assisted with hardware and system troubleshooting.",
      "Learned Jira usage in project management.",
      "Contributed to technical documentation."
    ]
  },


];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-purple-300"
      >
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-purple-400">{exp.date} • {exp.location}</p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
