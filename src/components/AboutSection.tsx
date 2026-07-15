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
      title: "Estrategia Confiable",
      description: "Aplicamos marcos probados para proteger y hacer crecer tu bienestar financiero.",
    },
    {
      icon: <TrendUp size={32} weight="light" />,
      title: "Resultados Medibles",
      description: "Nuestros clientes avanzan hacia sus metas con planes claros y seguimiento constante.",
    },
    {
      icon: <Users size={32} weight="light" />,
      title: "Soporte Dedicado",
      description: "Un consultor personal te acompaña en cada decisión importante.",
    },
    {
      icon: <Trophy size={32} weight="light" />,
      title: "Expertos Certificados",
      description: "Nuestro equipo posee certificaciones y credenciales líderes en la industria.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-20 md:py-32 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-indigo-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 blur-3xl animate-glow-pulse" />
              <div className="relative glass-card rounded-full p-8 flex items-center justify-center">
                  <div className="text-center space-y-4 sm:space-y-6">
                  <div className="text-5xl sm:text-7xl font-bold gradient-text-blue">+100%</div>
                  <div className="text-white/60 text-base sm:text-lg tracking-wide">Claridad Financiera</div>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="h-2 w-12 sm:w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    <div className="h-2 w-12 sm:w-16 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm text-primary tracking-wider uppercase">Sobre Nosotros</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                <span className="gradient-text-blue">Transformando</span>
                <br />
                <span className="text-white/90">Futuros Financieros</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                No solo asesoramos: empoderamos la libertad financiera. Nuestro equipo de consultores certificados ha ayudado a cientos de clientes a tomar mejores decisiones y desbloquear oportunidades que nunca creyeron posibles.
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
