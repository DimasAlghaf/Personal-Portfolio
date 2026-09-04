import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionReveal from './SectionReveal';
import { ElasticGallery } from './ui/elastic-gallery';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Map our projects data to match ElasticGallery's expected format, passing full object details
  const galleryItems = projects.map((project) => ({
    id: String(project.id).padStart(2, '0'),
    title: project.title,
    category: project.category,
    src: project.image,
    alt: project.description,
    description: project.description,
    technologies: project.technologies,
  }));

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="works" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionReveal>
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works.</h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-300 dark:text-gray-400 max-w-2xl">
              A collection of projects showcasing my focus on clean interfaces, robust functionality, and modern frontend technologies.
            </p>
          </div>
        </SectionReveal>

        {/* Elastic Gallery */}
        <SectionReveal>
          <ElasticGallery 
            items={galleryItems} 
            onProjectClick={(project) => setSelectedProject(project)} 
          />
        </SectionReveal>
        
        <SectionReveal className="mt-8 text-center">
          <a 
            href="https://github.com/DimasAlghaf" 
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-4xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors border border-white/10 backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="overflow-y-auto w-full h-full custom-scrollbar">
                {/* Header Image */}
                <div className="w-full h-64 sm:h-80 relative">
                  <img 
                    src={selectedProject.src} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-light dark:from-bg-dark to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-10 -mt-16 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-500 text-sm">#{selectedProject.id}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-text-light dark:text-text-dark">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Overview</h4>
                    <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-text-light dark:text-text-dark">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 rounded-lg text-sm text-text-light dark:text-text-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
