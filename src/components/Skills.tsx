import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const SkillCategory: React.FC<{ title: string; skills: any[]; delay: number; gradient: string }> = ({
    title,
    skills,
    delay,
    gradient
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {title}
        </h3>
        <div className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mx-auto`}></div>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <div className="text-gray-400 text-sm">Proficiency</div>
                </div>
              </div>
              <div className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {skill.level}%
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: delay + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${gradient} h-3 rounded-full relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
              <div className="absolute top-0 left-0 w-full h-3 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const categories = [
    {
      title: "Development",
      skills: skills.development,
      delay: 0,
      gradient: "from-blue-400 via-cyan-400 to-teal-400"
    },
    {
      title: "Database & DevOps", 
      skills: skills.databaseAndDevOps,
      delay: 0.2,
      gradient: "from-green-400 via-emerald-400 to-lime-400"
    },
    {
      title: "Tools & Security",
      skills: skills.toolsAndSecurity,
      delay: 0.4,
      gradient: "from-purple-400 via-pink-400 to-rose-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Expertise across the full development stack with modern technologies and best practices
          </p>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
              gradient={category.gradient}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">1+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Projects Built</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Passion Driven</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;