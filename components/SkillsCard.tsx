
import React from 'react';
import { SkillCategory } from '../types';

interface SkillsCardProps {
  skills: SkillCategory[];
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="space-y-6">
      {skills.map((category, index) => (
        <div key={index} className="bg-gray-700/50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-sky-300 mb-3">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-sky-600 text-white px-3 py-1 text-sm rounded-full shadow hover:bg-sky-500 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
