import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cricket Data Analysis',
    description: 'Wrote a python script to perform analysis on cricket data to predict winner.',
    image: '',
    tags: ['Python', 'Matplotlib', 'NumPy'],
    link: 'https://github.com',
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Made a expense tracker that tracks the expenses and provides insights on personal finance.',
    image: '',
    tags: ['Python', 'Matplotlib', 'NumPy', 'scikit '],
    link: 'https://github.com',
  },
  {
    title: 'Web Scrapping',
    description: 'Wrote a Python Script to scrape data of Everest Bank Limited, Nepal.',
    image: '',
    tags: ['Python', 'beautifulsoup', 'requests'],
    link: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        My Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;