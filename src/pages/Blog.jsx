import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const posts = [
  {
    title: 'Getting Started with Python.',
    excerpt: 'Learn how to master Python for AI/ML.',
    date: new Date('2023-08-01'),
    readTime: '5 min read',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Everything about WebScrapping and WebServer',
    excerpt: 'A comprehensive guide to creating responsive layouts using Tailwind CSS utility classes.',
    date: new Date('2023-07-28'),
    readTime: '8 min read',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'LLM and Rapid growth of AI',
    excerpt: 'lorem Ipsum...',
    date: new Date('2023-07-25'),
    readTime: '6 min read',
    image: 'https://via.placeholder.com/800x400',
  },
];

const Blog = () => {
  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Blog
      </motion.h1>

      <div className="space-y-12">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <span>{format(post.date, 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200">
                Read More →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;