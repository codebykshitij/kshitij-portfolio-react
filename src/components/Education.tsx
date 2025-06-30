import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="space-y-1 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Award size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:text-right">
                  <div className="flex items-center space-x-1 text-blue-400 mb-2 lg:justify-end">
                    <Calendar size={16} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="text-green-400 font-medium">CGPA: {edu.gpa}</div>
                  )}
                </div>
              </div>

              {edu.relevant && edu.relevant.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course) => (
                      <span
                        key={course}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;