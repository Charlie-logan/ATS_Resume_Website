
import React from 'react';
import { WorkExperience } from '../types';
import { LocationIcon } from './icons/LocationIcon'; // Assuming you might want this

interface ExperienceCardProps {
  experience: WorkExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-sky-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="text-xl font-semibold text-sky-300">{experience.role}</h3>
        <p className="text-sm text-gray-400 mt-1 sm:mt-0">{experience.dates}</p>
      </div>
      <div className="flex items-center text-md text-gray-300 mb-3">
        <span>{experience.company}</span>
        <span className="mx-2 text-gray-500">|</span>
        <LocationIcon className="w-4 h-4 mr-1 text-gray-400" />
        <span>{experience.location}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300 pl-1">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="leading-relaxed">{resp}</li>
        ))}
      </ul>
    </div>
  );
};
