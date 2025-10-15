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
import logo from "@/assets/adacoys-logo.png";

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

  const featuredService = {
    icon: <UserCircle size={48} weight="light" />,
    title: "Chequea tu Puntaje de Crédito",
    description: "Obtén acceso inmediato a tu puntaje de crédito y descubre cómo mejorar tu perfil financiero. Solo $1 USD.",
    gradient: "from-blue-500/30 to-cyan-600/30",
    glow: "glow-blue",
    link: "https://myfreescorenow.com/enroll/?AID=ADACOYSCONSULTING&PID=36754",
  };

  const services = [
    {
      icon: <FileText size={40} weight="light" />,
      title: "Análisis de Reporte Crediticio",
      description: "Revisión integral de las tres agencias de crédito para identificar errores, inexactitudes y oportunidades de mejora.",
      gradient: "from-blue-500/20 to-cyan-600/20",
      glow: "glow-blue",
    },
    {
      icon: <ChartLineUp size={40} weight="light" />,
      title: "Gestión de Disputas",
      description: "Proceso estratégico de disputas para desafiar items negativos y eliminar inexactitudes de tus reportes de crédito.",
      gradient: "from-rose-500/20 to-pink-600/20",
      glow: "glow-cyan",
    },
    {
      icon: <CreditCard size={40} weight="light" />,
      title: "Construcción de Crédito",
      description: "Estrategias personalizadas para establecer un historial crediticio positivo y mejorar tu perfil crediticio general.",
      gradient: "from-violet-500/20 to-fuchsia-600/20",
      glow: "glow-sky",
    },
    {
      icon: <ListChecks size={40} weight="light" />,
      title: "Asesoría de Crédito",
      description: "Orientación personalizada para desarrollar hábitos financieros saludables y mantener un excelente crédito a largo plazo.",
      gradient: "from-amber-500/20 to-orange-600/20",
      glow: "glow-cyan",
    },
    {
      icon: <Handshake size={40} weight="light" />,
      title: "Negociaciones con Acreedores",
      description: "Negociación experta con acreedores y agencias de cobranza para liquidar deudas y eliminar marcas negativas.",
      gradient: "from-emerald-500/20 to-teal-600/20",
      glow: "glow-sky",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white/90">Soluciones de Crédito</span>
            <br />
            <span className="gradient-text-rose">Completas</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Desde el análisis hasta la ejecución, brindamos servicios integrales de reparación de crédito adaptados a tu situación única.
          </p>
        </div>

        {/* Featured Service Card - Centered */}
        <div className="max-w-2xl mx-auto mb-12">
          <a
            href={featuredService.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card p-6 sm:p-8 md:p-10 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden border-2 border-blue-500/30 hover:border-blue-500/50"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${featuredService.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            
            <div className="relative z-10 text-center">
              <div className={`text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ${featuredService.glow} inline-block`}>
                {featuredService.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{featuredService.title}</h3>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mb-3 md:mb-4">{featuredService.description}</p>
              <span className="inline-block text-blue-400 group-hover:text-blue-300 font-medium text-sm sm:text-base">
                Verificar Ahora →
              </span>
            </div>
          </a>
        </div>

        {/* Regular Services Grid */}
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
                <div className={`text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ${service.glow}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/17028614457"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-8 py-4 hover:bg-white/[0.08] transition-all duration-300 group border border-green-500/30 hover:border-green-500/50"
          >
            <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-white font-medium text-lg">Contáctanos por WhatsApp</span>
          </a>
        </div>

        {/* Insurance Promotional Section */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 md:p-12 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-600/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <img 
                  src={logo} 
                  alt="Adacoys Consulting Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                Adacoys Credit Insurance
              </h3>
              <p className="text-lg sm:text-xl text-secondary mb-4 md:mb-6">
                Tu "seguro" de reparación de crédito
              </p>
              <p className="text-white/60 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
                Planes mensuales desde $25 que cubren la gestión de problemas comunes en tu historial de crédito. Disputamos errores, pedimos verificaciones y negociamos actualizaciones con acreedores cuando corresponde.
              </p>
              <a href="/seguro">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Conocer Planes
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
