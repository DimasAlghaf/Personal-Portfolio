import React from "react";
import { motion } from "motion/react";
import { LoaderGlitchText } from "./ui/LoaderGlitchText";

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LoaderGlitchText text="Dimas" className="text-4xl" />
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const socialLinks = [
    { name: "GitHub", icon: "mdi:github", href: "https://github.com/dimasalghaf" },
    { name: "LinkedIn", icon: "mdi:linkedin", href: "https://www.linkedin.com/in/dimas-ayyub-alghafiqi/" },
    { name: "Instagram", icon: "mdi:instagram", href: "https://instagram.com" },
    { name: "Email", icon: "mdi:email-outline", href: "mailto:dimasalghaf@gmail.com" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Feedback", href: "#contact" },
  ];

  return (
    <footer className="w-full py-12 bg-transparent overflow-hidden border-t border-border-light dark:border-border-dark relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Logo />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium relative z-10"
        >
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative px-3 py-1.5 group text-gray-500 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </span>
              <motion.span
                className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-md -z-0 origin-center"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div variants={itemVariants} className="flex gap-6 items-center">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              title={social.name}
              whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 12 : -12, y: -3 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
            >
              <iconify-icon icon={social.icon} class="text-3xl block"></iconify-icon>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full h-12 border-y border-border-light dark:border-border-dark opacity-30 dark:opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] text-primary"
        style={{ backgroundSize: "10px 10px" }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      />

      {/* Copyright */}
      <motion.div
        className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p>&copy; {currentYear} Dimas Ayyub Alghafiqi. All rights reserved.</p>
        <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
        <div className="flex items-center gap-1.5" title="Available for work">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest">Available</span>
        </div>
      </motion.div>
    </footer>
  );
}
