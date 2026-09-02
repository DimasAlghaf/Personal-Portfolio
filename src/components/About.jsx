import SectionReveal from './SectionReveal';
import { skills } from '../data/skills';
import { ProgressiveBlur } from './ProgressiveBlur';

const About = () => {
  const allSkills = skills.flatMap(group => group.items);
  return (
    <section id="about" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me.</h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              
              <div className="space-y-4 text-gray-300 dark:text-gray-300 text-justify">
                <p>
                  Computer Engineering graduate specializing in web development with a passion for building modern, responsive, and scalable web applications. Experienced in developing full-stack solutions by combining intuitive user interfaces with robust back-end systems. Dedicated to writing clean, maintainable code, optimizing application performance, and continuously learning emerging technologies to deliver reliable and user-focused digital experiences.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Stats / Mini Info */}
                <div className="p-6 border border-border-light dark:border-border-dark bg-white/5 dark:bg-[#030509]/60 backdrop-blur-md rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-white/50 transition-colors duration-300">
                  <h3 className="text-4xl font-bold text-white mb-2">05+</h3>
                  <p className="font-medium mb-1">Months Experience</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">Working professionally in web development.</p>
                </div>
                
                <div className="p-6 border border-border-light dark:border-border-dark bg-white/5 dark:bg-[#030509]/60 backdrop-blur-md rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-white/50 transition-colors duration-300">
                  <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                  <p className="font-medium mb-1">Projects Completed</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">Ranging from landing pages to complex web apps.</p>
                </div>
                </div>
                
                {/* Tech Stack Marquee (Scaled Down) */}
                <div className="mt-8 relative w-full rounded-2xl border border-white/30 dark:border-primary/20 bg-white/60 dark:bg-[#050b14]/80 backdrop-blur-2xl shadow-[0_4px_16px_0_rgba(96,165,250,0.15)] overflow-hidden py-8 md:col-span-2">
                  
                  {/* Left Blur Overlay */}
                  <ProgressiveBlur 
                    direction="left" 
                    className="absolute top-0 bottom-0 left-0 w-16 z-10 pointer-events-none" 
                    blurLayers={8} 
                    blurIntensity={1.5} 
                  />

                  {/* Marquee Container */}
                  <div className="relative z-0 flex overflow-hidden">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                      <div className="flex shrink-0 gap-6 px-4">
                        {allSkills.map((skill, idx) => (
                          <div key={`set1-${idx}`} className="flex flex-col items-center justify-center gap-2 group">
                            <div className="w-16 h-16 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-md hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-1">
                              <iconify-icon icon={skill.icon} class="text-3xl"></iconify-icon>
                            </div>
                            <span className="font-semibold text-[10px] text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex shrink-0 gap-6 px-4" aria-hidden="true">
                        {allSkills.map((skill, idx) => (
                          <div key={`set2-${idx}`} className="flex flex-col items-center justify-center gap-2 group">
                            <div className="w-16 h-16 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-md hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-1">
                              <iconify-icon icon={skill.icon} class="text-3xl"></iconify-icon>
                            </div>
                            <span className="font-semibold text-[10px] text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Blur Overlay */}
                  <ProgressiveBlur 
                    direction="right" 
                    className="absolute top-0 bottom-0 right-0 w-16 z-10 pointer-events-none" 
                    blurLayers={8} 
                    blurIntensity={1.5} 
                  />
                </div>
                
              </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default About;
