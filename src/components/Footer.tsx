import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        },
      }
    );

    // Floating particles animation
    const particles = footer.querySelectorAll(".particle");
    particles.forEach((particle) => {
      gsap.to(particle, {
        y: -20,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  const socialLinks = [
    { icon: <GithubLogo size={24} weight="fill" />, href: "#" },
    { icon: <LinkedinLogo size={24} weight="fill" />, href: "#" },
    { icon: <TwitterLogo size={24} weight="fill" />, href: "#" },
    { icon: <InstagramLogo size={24} weight="fill" />, href: "#" },
  ];

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.05] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.05] via-transparent to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle absolute w-2 h-2 rounded-full bg-indigo-500/30 blur-sm top-1/4 left-1/4" />
        <div className="particle absolute w-3 h-3 rounded-full bg-purple-500/30 blur-sm top-1/3 right-1/3" />
        <div className="particle absolute w-2 h-2 rounded-full bg-rose-500/30 blur-sm bottom-1/4 left-1/3" />
        <div className="particle absolute w-3 h-3 rounded-full bg-violet-500/30 blur-sm bottom-1/3 right-1/4" />
      </div>

      <div ref={footerRef} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text-indigo mb-2">Credit Repair</h3>
            <p className="text-white/40 text-sm">Building Better Credit, Building Better Futures</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="glass-card p-3 text-white/60 hover:text-white hover:bg-white/[0.05] transition-all duration-300 hover:scale-110 rounded-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-white/[0.05] w-full">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Credit Repair. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
