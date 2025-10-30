import React from 'react';
import { SKILLS } from '../constants';
import CircularProgress from './CircularProgress';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-[#161b22]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">My Toolkit</h2>
          <p className="text-lg text-slate-400 mt-2 max-w-2xl mx-auto text-balance">
            The software and technologies I use to turn vision into reality.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center">
              <CircularProgress level={skill.level} size={120} strokeWidth={8}>
                <skill.icon className="h-10 w-10 text-slate-400 mb-1" />
                 <span className="text-2xl font-bold text-white">{skill.level}%</span>
              </CircularProgress>
              <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;