import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Coding School - 42 Istanbul",
      date: "August 2023 - October 2023",
      location: "Istanbul, Türkiye",
      details: [
        "Intensive, project-based training focused on low-level programming using C and Unix/Linux systems.",
        "Learned memory management, file I/O, and pointer arithmetic.",
        "Built applications without using standard libraries, relying solely on system calls and terminal tools.",
        "Gained hands-on experience with shell scripting, Git CLI, and process management via terminal."
      ]
    },
    {
      title: "Participant - YGA Summit 2022",
      date: "December 2022 - 3 Days",
      location: "Istanbul, Türkiye",
      details: [
        "Selected from thousands of applicants for a high-impact innovation and leadership event.",
        "Engaged in interactive panels and workshops with global experts.",
        "Gained deep insights into AI, innovation, and global leadership.",
        "Developed critical thinking, empathy, and vision."
      ]
    },
    {
      title: "Data Analysis Intern - CREADATA",
      date: "July 2024 - Sep 2024",
      location: "Istanbul, Türkiye",
      details: [
        "Cleaned and analyzed datasets in Excel.",
        "Built dashboards with Power BI.",
        "Designed visualizations using Figma."
      ]
    },
    {
      title: "IT Volunteer Internship - BAYEGAN",
      date: "Dec 2024 - Feb 2025",
      location: "Istanbul, Türkiye",
      details: [
        "Observed corporate software lifecycle with Jira, Git, and Agile.",
        "Worked with Microsoft 365 and Cisco Systems.",
        "Handled technical setup and troubleshooting."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="bg-black text-white px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl shadow-md mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.date}</p>
            <p className="text-sm text-gray-400">{exp.location}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-300 space-y-1">
              {exp.details.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
