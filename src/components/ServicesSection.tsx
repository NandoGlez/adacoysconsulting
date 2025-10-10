import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FileText, 
  ChartLineUp, 
  CreditCard, 
  UserCircle, 
  ListChecks, 
  Handshake 
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    gsap.fromTo(
      cards.children,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: <FileText size={40} weight="light" />,
      title: "Análisis de Reporte Crediticio",
      description: "Revisión integral de las tres agencias de crédito para identificar errores, inexactitudes y oportunidades de mejora.",
      gradient: "from-indigo-500/20 to-purple-600/20",
      glow: "glow-indigo",
    },
    {
      icon: <ChartLineUp size={40} weight="light" />,
      title: "Gestión de Disputas",
      description: "Proceso estratégico de disputas para desafiar items negativos y eliminar inexactitudes de tus reportes de crédito.",
      gradient: "from-rose-500/20 to-pink-600/20",
      glow: "glow-rose",
    },
    {
      icon: <CreditCard size={40} weight="light" />,
      title: "Construcción de Crédito",
      description: "Estrategias personalizadas para establecer un historial crediticio positivo y mejorar tu perfil crediticio general.",
      gradient: "from-violet-500/20 to-fuchsia-600/20",
      glow: "glow-violet",
    },
    {
      icon: <UserCircle size={40} weight="light" />,
      title: "Monitoreo de Identidad",
      description: "Monitoreo 24/7 para proteger contra robo de identidad y actividad no autorizada en tu perfil crediticio.",
      gradient: "from-cyan-500/20 to-blue-600/20",
      glow: "glow-indigo",
    },
    {
      icon: <ListChecks size={40} weight="light" />,
      title: "Asesoría de Crédito",
      description: "Orientación personalizada para desarrollar hábitos financieros saludables y mantener un excelente crédito a largo plazo.",
      gradient: "from-amber-500/20 to-orange-600/20",
      glow: "glow-rose",
    },
    {
      icon: <Handshake size={40} weight="light" />,
      title: "Negociaciones con Acreedores",
      description: "Negociación experta con acreedores y agencias de cobranza para liquidar deudas y eliminar marcas negativas.",
      gradient: "from-emerald-500/20 to-teal-600/20",
      glow: "glow-violet",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-violet-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm text-secondary tracking-wider uppercase">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white/90">Soluciones de Crédito</span>
            <br />
            <span className="gradient-text-rose">Completas</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Desde el análisis hasta la ejecución, brindamos servicios integrales de reparación de crédito adaptados a tu situación única.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`text-primary mb-6 group-hover:scale-110 transition-transform duration-300 ${service.glow}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
