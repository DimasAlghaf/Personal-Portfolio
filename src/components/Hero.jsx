import SectionReveal from './SectionReveal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionReveal>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Text Content */}
            <div className="w-full lg:w-3/5 flex flex-col space-y-6">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase mb-2">Web Developer</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                  Hello, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 dark:from-text-dark dark:to-gray-400">
                    Dimas Ayyub Alghafiqi
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 max-w-lg leading-relaxed">
                I build clean, modern, and highly performant web applications with a focus on exceptional user experiences and robust frontend architecture.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#works" 
                  className="px-8 py-4 bg-white dark:bg-text-dark text-black dark:text-bg-dark font-medium rounded-sm hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-transparent text-text-light dark:text-text-dark border border-border-light dark:border-border-dark font-medium rounded-sm hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative Elements */}
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-sm -z-10"></div>
                <div className="absolute inset-0 bg-accent-bg backdrop-blur-3xl -translate-x-4 -translate-y-4 rounded-sm -z-20"></div>
                
                {/* Photo Placeholder */}
                <div className="w-full h-full overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-800">
                  <img 
                    src="/dimas.jpeg" 
                    alt="DIMAS_AYYUB_ALGHAFIQI" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Hero;
