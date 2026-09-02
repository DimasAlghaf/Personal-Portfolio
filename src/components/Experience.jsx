import SectionReveal from './SectionReveal';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <div id="experience" className="h-full">
      <div className="flex flex-col h-full">
        <SectionReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience.</h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
          </div>
        </SectionReveal>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-light dark:before:via-border-dark before:to-transparent">
          {experience.map((job) => (
            <SectionReveal key={job.id}>
              <div className="relative flex items-start group is-active">
                
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white dark:border-bg-dark bg-primary shrink-0 shadow-sm z-10 translate-x-[-8px] mt-1.5"></div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-1.5rem)] ml-auto p-6 border border-border-light dark:border-border-dark rounded-xl bg-white/5 dark:bg-[#030509]/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-primary mb-1">{job.period}</span>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <h4 className="text-gray-300 dark:text-gray-400 font-medium">{job.company}</h4>
                  </div>
                  
                  <p className="text-gray-300 dark:text-gray-400 mb-4 text-justify">
                    {job.description}
                  </p>
                  
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-400 dark:text-gray-400 text-justify">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
