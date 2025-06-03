
import React from 'react';

interface LinkedInIconProps {
  className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-.5-2.375-1.75-2.375S12.5 13.1 12.5 14.5V19h-3v-9h2.9v1.375C12.9 10.062 14.375 9 16.25 9c2.5 0 4.25 1.625 4.25 4.75V19z" />
  </svg>
);
