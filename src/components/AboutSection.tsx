import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, TrendUp, Users, Trophy } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    gsap.fromTo(
      image,
      { opacity: 0, x: -60, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );
  }, []);

  const features = [
    {
      icon: <ShieldCheck size={32} weight="light" />,
      title: "Proven Protection",
      description: "We leverage federal consumer protection laws to dispute inaccuracies.",
    },
    {
      icon: <TrendUp size={32} weight="light" />,
      title: "Score Improvement",
      description: "Average clients see 100+ point increases within 90 days.",
    },
    {
      icon: <Users size={32} weight="light" />,
      title: "Dedicated Support",
      description: "Your personal credit specialist guides you every step.",
    },
    {
      icon: <Trophy size={32} weight="light" />,
      title: "Certified Experts",
      description: "Our team holds industry-leading certifications and credentials.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-20 md:py-32 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-indigo-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-3xl animate-glow-pulse" />
              <div className="relative glass-card rounded-full p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-7xl font-bold gradient-text-indigo">850</div>
                  <div className="text-white/60 text-lg tracking-wide">Your Dream Score</div>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="h-2 w-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" />
                    <div className="h-2 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm text-primary tracking-wider uppercase">About Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text-indigo">Transforming</span>
                <br />
                <span className="text-white/90">Credit Futures</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                We're not just fixing credit scores—we're empowering financial freedom. Our team of certified specialists has helped thousands rebuild their credit and unlock opportunities they never thought possible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
