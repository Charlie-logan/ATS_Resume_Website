
import React from 'react';

interface LinkIconProps {
  className?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path
      fillRule="evenodd"
      d="M15.75 2.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-5.72 5.72a.75.75 0 01-1.06-1.06l5.72-5.72H10.5a.75.75 0 010-1.5h5.25zm-3.47 3.53a.75.75 0 010 1.06L6.56 12.562l1.22-1.219a.75.75 0 111.06 1.061l-1.22 1.219 1.72 1.719a.75.75 0 11-1.06 1.06l-1.72-1.719-1.22 1.219a.75.75 0 11-1.06-1.061l1.22-1.219L3.53 9.28a.75.75 0 010-1.06l2.25-2.25a.75.75 0 011.06 0L9 8.188l1.22-1.22a.75.75 0 011.06 0zM19.5 9.75a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.31l.97.97a.75.75 0 101.06-1.06L5.81 8.5H15a.75.75 0 01.75.75v.75a.75.75 0 101.5 0v-.75a.75.75 0 01.75-.75h1.5z"
      clipRule="evenodd"
    />
  </svg>
);
