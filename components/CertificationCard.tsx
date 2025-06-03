
import React from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-gray-700/50 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-sky-500/20">
      <h3 className="text-lg font-semibold text-sky-300">{certification.name}</h3>
      <p className="text-sm text-gray-300">{certification.issuer}</p>
      <p className="text-xs text-gray-400 mb-2">{certification.dates}</p>
      {certification.description && <p className="text-sm text-gray-300 leading-relaxed">{certification.description}</p>}
    </div>
  );
};
