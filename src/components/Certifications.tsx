import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState('featured');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredCertifications = filter === 'all'
    ? certifications
    : filter === 'featured'
      ? certifications.filter(p => p.featured)
      : certifications;

  const filterLabels: { [key: string]: string } = {
    featured: 'Work Experience',
    all: 'All Certifications',
  };

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-[0_0_0_2px_#3b82f6] transition-all duration-300 overflow-hidden group cursor-pointer h-full min-h-[350px]"
      onClick={() => setSelectedProject(project.id)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full aspect-video object-cover object-center scale-[0.98] mt-2 transition-transform duration-300 group-hover:scale-100"        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star size={16} />
            <span>Work Experience Project</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col justify-between h-[180px]">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Certifications & Achievements
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12 relative"
        >
          <Filter className="w-5 h-5 text-gray-400" />
          {['featured', 'all'].map((filterType) => (
            <motion.button
              key={filterType}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterType)}
              className={`relative px-6 py-2 text-sm font-semibold capitalize transition-colors duration-300 ${
                filter === filterType
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filterLabels[filterType]}
              {filter === filterType && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto scroll-smooth relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm z-10"
                >
                  ✕
                </button>
                {(() => {
                  const project = certifications.find(p => p.id === selectedProject);
                  return project ? (
                    <div>
                      <img
                        loading="lazy"
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-contain object-center scale-[0.95] transition-transform duration-300 group-hover:scale-100"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
