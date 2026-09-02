import SectionReveal from './SectionReveal';

const Contact = () => {
  const contactLinks = [
    { name: 'Email', value: 'dimasalghaf@gmail.com', href: 'mailto:dimasalghaf@gmail.com' },
    { name: 'WhatsApp', value: '+62 822 8445 8312', href: 'https://wa.me/6282284458312' },
    { name: 'LinkedIn', value: 'linkedin.com/dimas-ayyub-alghafiqi', href: 'https://www.linkedin.com/in/dimas-ayyub-alghafiqi/' },
    { name: 'GitHub', value: 'github.com/DimasAlghaf', href: 'https://github.com/dimasalghaf' },
    { name: 'Instagram', value: '@dimasalghaf', href: 'https://instagram.com' }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          <SectionReveal>
            <div>
              <p className="text-primary font-medium tracking-wider uppercase mb-2">Get In Touch</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
                Have a project <br className="hidden md:block"/> in mind?
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-400 mb-10 max-w-md">
                I'm currently available for freelance work and new opportunities. Let's build something great together.
              </p>
            </div>
          </SectionReveal>
          
          <SectionReveal>
            <div className="flex flex-col justify-center space-y-6 lg:pl-12">
              {contactLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target={link.name !== 'Email' && link.name !== 'WhatsApp' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-end justify-between border-b border-border-light dark:border-border-dark pb-4 hover:border-primary dark:hover:border-primary transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </SectionReveal>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
