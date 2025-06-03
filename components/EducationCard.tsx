
import React from 'react';
import { EducationEntry } from '../types';
import { LocationIcon } from './icons/LocationIcon';

interface EducationCardProps {
  education: EducationEntry;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-sky-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
        <h3 className="text-xl font-semibold text-sky-300">{education.degree}</h3>
        {education.dates && <p className="text-sm text-gray-400 mt-1 sm:mt-0">{education.dates}</p>}
      </div>
      <p className="text-md text-gray-300">{education.institution}</p>
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <LocationIcon className="w-3 h-3 mr-1" />
        <span>{education.location}</span>
      </div>
      {education.university && <p className="text-sm text-gray-400">{education.university}</p>}
      {education.percentage && <p className="text-sm text-sky-400 font-medium">{education.percentage}</p>}
      {education.details && education.details.length > 0 && (
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 text-sm">
          {education.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
