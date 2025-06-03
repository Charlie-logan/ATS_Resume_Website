
import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { LocationIcon } from './icons/LocationIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-sky-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
        <h3 className="text-xl font-semibold text-sky-300">{project.name}</h3>
        {project.dates && <p className="text-sm text-gray-400 mt-1 sm:mt-0">{project.dates}</p>}
      </div>

      {project.location && (
         <div className="flex items-center text-sm text-gray-400 mb-3">
            <LocationIcon className="w-3 h-3 mr-1" />
            <span>{project.location}</span>
        </div>
      )}
     
      <p className="text-gray-300 mb-3 leading-relaxed">{project.description}</p>
      
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-sky-400 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-600 text-sky-200 px-2 py-0.5 text-xs rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors duration-200 text-sm"
        >
          <GitHubIcon className="w-4 h-4 mr-2" />
          {project.githubDisplay || 'View on GitHub'}
        </a>
      )}
    </div>
  );
};
