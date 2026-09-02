const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border-light dark:border-border-dark bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tighter">
            DIMAS_AYYUB_ALGHAFIQI<span className="text-primary"></span>
          </span>
          <span className="hidden md:inline-block w-px h-4 bg-border-light dark:bg-border-dark"></span>
          <span className="text-sm text-gray-400 dark:text-gray-400 hidden md:block">
            Web Developer
          </span>
        </div>
        
        <p className="text-sm text-gray-400 dark:text-gray-400">
          &copy; {currentYear} DIMAS_AYYUB_ALGHAFIQI. All rights reserved.
        </p>
        
        {/* Optional small decorative element */}
        <div className="hidden md:flex items-center gap-1.5" title="Available for work">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Available</span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
