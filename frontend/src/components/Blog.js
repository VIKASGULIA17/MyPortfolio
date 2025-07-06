import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Blog = () => {
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blogRef.current) observer.observe(blogRef.current);

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'React': return 'from-blue-500 to-cyan-500';
      case 'Python': return 'from-purple-500 to-red-500';
      case 'Webscraping': return 'from-indigo-500 to-blue-400';
      case 'Data Cleaning': return 'from-cyan-700 to-rose-400';
      case 'EDA': return 'from-orange-500 to-rose-500';
      case 'Machine Learning': return 'from-green-500 to-teal-500';
      case 'Data Science': return 'from-purple-500 to-pink-500';
      default: return 'from-purple-500 to-red-500';
    }
  };

  const handleReadMore = (url) => {
  window.location.href=url, "_blank";
};


  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={blogRef} className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              Blog & Insights
            </h2>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Articles</span>
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in data science and web development.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.blogs.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${getCategoryColor(post.category)} px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg`}>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleReadMore(post.slug)}
                    className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none"
                  >
                    Read Article
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h4>
                
                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(post.slug)}
                  className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300 group focus:outline-none"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup -will use when i'll create a newsletter */}
        {/* <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest articles on data science, web development, and tech insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg"
            />
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none">
              Subscribe
            </button>
          </div> */}
        {/* </div> */}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium">
            <span>Want to read more?</span>
            <button 
              onClick={() => window.location.href = "https://dev.to/vikas_gulia"}

              className="underline hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 focus:outline-none"
            >
              Visit my blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;