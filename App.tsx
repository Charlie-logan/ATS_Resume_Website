
import React from 'react';
import { resumeData } from './resumeData';
import { HeaderCard } from './components/HeaderCard';
import { Section } from './components/Section';
import { SkillsCard } from './components/SkillsCard';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { EducationCard } from './components/EducationCard';
import { CertificationCard } from './components/CertificationCard';
import { Language, Certification, EducationEntry, Project, WorkExperience } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 p-4 sm:p-8 font-sans text-gray-200">
      <div className="container mx-auto max-w-4xl bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <HeaderCard name={resumeData.name} contact={resumeData.contact} />

        <div className="p-6 sm:p-10 space-y-10">
          <Section title="Summary">
            <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
          </Section>

          <Section title="Skills">
            <SkillsCard skills={resumeData.skills} />
          </Section>

          <Section title="Work Experience">
            <div className="space-y-8">
              {resumeData.workExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              {resumeData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Section>

          <Section title="Education">
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <EducationCard key={index} education={edu} />
              ))}
            </div>
          </Section>

          <Section title="Certifications & Training">
            <div className="space-y-6">
              {resumeData.certifications.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
              ))}
            </div>
          </Section>

          <Section title="Languages">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {resumeData.languages.map((lang, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded-md shadow">
                  <span className="font-semibold text-sky-400">{lang.name}:</span>
                  <span className="text-gray-300 ml-2">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Hobbies">
            <p className="text-gray-300 leading-relaxed">
              {resumeData.hobbies.join(', ')}
            </p>
          </Section>
        </div>
        <footer className="text-center py-6 bg-gray-900 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
