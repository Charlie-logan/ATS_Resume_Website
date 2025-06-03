
import React from 'react';
import { ContactInfo } from '../types';
import { PhoneIcon } from './icons/PhoneIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LocationIcon } from './icons/LocationIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkIcon } from './icons/LinkIcon';

interface HeaderCardProps {
  name: string;
  contact: ContactInfo;
}

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href }) => (
  <div className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors duration-200">
    {icon}
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="break-all">
        {text}
      </a>
    ) : (
      <span className="break-all">{text}</span>
    )}
  </div>
);

export const HeaderCard: React.FC<HeaderCardProps> = ({ name, contact }) => {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-cyan-500 p-6 sm:p-10 text-white shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">{name}</h1>
        <p className="text-xl text-sky-100 mb-6">Software Engineer</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <ContactItem icon={<PhoneIcon className="w-4 h-4 text-sky-200"/>} text={contact.phone} href={`tel:${contact.phone}`} />
          <ContactItem icon={<EmailIcon className="w-4 h-4 text-sky-200"/>} text={contact.email} href={`mailto:${contact.email}`} />
          <ContactItem icon={<LocationIcon className="w-4 h-4 text-sky-200"/>} text={contact.address} />
          <ContactItem icon={<LinkedInIcon className="w-4 h-4 text-sky-200"/>} text={contact.linkedinDisplay} href={contact.linkedin} />
          <ContactItem icon={<GitHubIcon className="w-4 h-4 text-sky-200"/>} text={contact.githubDisplay} href={contact.github} />
          <ContactItem icon={<LinkIcon className="w-4 h-4 text-sky-200"/>} text={contact.hackerrankDisplay} href={contact.hackerrank} />
        </div>
      </div>
    </header>
  );
};
