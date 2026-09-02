import SectionReveal from './SectionReveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="works" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works.</h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-300 dark:text-gray-400 max-w-2xl">
              A collection of projects showcasing my focus on clean interfaces, robust functionality, and modern frontend technologies.
            </p>
          </div>
        </SectionReveal>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <SectionReveal className="mt-16 text-center">
          <a 
            href="https://github.com/YOUR_GITHUB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pb-1 border-b border-text-light dark:border-text-dark font-medium hover:text-primary hover:border-primary transition-colors"
          >
            View More on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Projects;
