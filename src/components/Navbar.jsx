import { useScrollPosition } from '../hooks/useScrollPosition';
import { motion, useScroll, useTransform } from 'motion/react';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;
  
  const { scrollY } = useScroll();
  // Muncul perlahan ketika scroll dari 0px sampai 200px (kebalikan dari Hero)
  const profileOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const profileScale = useTransform(scrollY, [0, 200], [0.5, 1]);
  const profileWidth = useTransform(scrollY, [0, 200], ["0px", "40px"]);
  const profileMargin = useTransform(scrollY, [0, 200], ["0px", "16px"]); // ml-4

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Feedback', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark shadow-sm' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          Dimas Ayyub Alghafiqi<span className="text-primary"></span>
        </a>
        
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Profile Picture that appears gradually on scroll */}
          <motion.div 
            className="flex items-center origin-right overflow-hidden"
            style={{ 
              opacity: profileOpacity,
              scale: profileScale,
              width: profileWidth,
              marginLeft: profileMargin
            }}
          >
            <a href="#home" className="block w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-colors duration-300">
              <img 
                src="/dimas.jpeg" 
                alt="Dimas Profile" 
                className="w-full h-full object-cover"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
