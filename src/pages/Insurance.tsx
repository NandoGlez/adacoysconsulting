import { useState } from "react";
import { Check, Shield, AlertCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const Insurance = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "gold",
      name: "Gold",
      price: 25,
      period: "6 meses de espera",
      description: "Plan básico para correcciones simples",
      features: [
        "Inquiries no autorizadas",
        "Corrección de datos personales",
        "Pagos tarde hasta 2 cuentas",
      ],
      notIncluded: [
        "Charge-off no incluido",
        "Trabajo extra con 30% descuento",
      ],
      gradient: "from-yellow-500/20 to-amber-600/20",
      glow: "shadow-[0_0_40px_rgba(251,191,36,0.2)]",
    },
    {
      id: "platinum",
      name: "Platinum",
      price: 50,
      period: "6 meses de espera",
      description: "Plan intermedio con más cobertura",
      features: [
        "Todo lo de Gold",
        "Colecciones hasta 2 cuentas",
        "1 Charge-off incluido",
        "Reposición, tarjeta sin pagar o préstamo",
      ],
      notIncluded: [
        "Trabajo extra con 30% descuento",
      ],
      gradient: "from-slate-400/20 to-slate-600/20",
      glow: "shadow-[0_0_40px_rgba(148,163,184,0.2)]",
      popular: true,
    },
    {
      id: "centurion",
      name: "Centurion",
      price: 70,
      period: "6 meses de espera",
      description: "Plan avanzado para casos complejos",
      features: [
        "Todo lo de Platinum",
        "2 Charge-off adicionales (total 3)",
        "Pagos tarde ilimitados",
        "Cobertura extendida",
      ],
      notIncluded: [
        "Trabajo extra con 30% descuento",
      ],
      gradient: "from-purple-500/20 to-purple-700/20",
      glow: "shadow-[0_0_40px_rgba(168,85,247,0.2)]",
    },
    {
      id: "full-cover",
      name: "Full Cover",
      price: 120,
      period: "Sin espera - Inicia desde la primera cuota",
      description: "Máxima cobertura para daño activo",
      features: [
        "Todo sin límites",
        "Inquiries ilimitados",
        "Datos personales",
        "Pagos tarde ilimitados",
        "Colecciones ilimitadas",
        "Todos los Charge-off",
        "Reposiciones, tarjetas, préstamos",
      ],
      notIncluded: [],
      gradient: "from-blue-500/20 to-cyan-600/20",
      glow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
      premium: true,
    },
  ];

  const coverageItems = [
    {
      title: "Inquiries no autorizadas",
      description: "Consultas duras que no aprobaste",
    },
    {
      title: "Datos personales mal reportados",
      description: "Nombre, dirección, SSN, etc.",
    },
    {
      title: "Pagos tarde",
      description: "Priorizamos errores; si el atraso fue real, pedimos buena voluntad",
    },
    {
      title: "Cuentas en colecciones",
      description: "Verificación de deuda y posible negociación de actualización",
    },
    {
      title: "Charge-off",
      description: "Reposiciones, tarjetas sin pagar, préstamos estudiantiles y personales",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Diagnóstico rápido",
      description: "Revisamos tu reporte y te decimos qué entra en tu plan y qué sería extra (con 30% off)",
    },
    {
      number: "2",
      title: "Documentos simples",
      description: "Identificación, comprobante de domicilio y reportes recientes",
    },
    {
      number: "3",
      title: "Acción",
      description: "Enviamos disputas/solicitudes a burós y abrimos negociaciones con acreedores cuando conviene",
    },
    {
      number: "4",
      title: "Seguimiento 30-60-90 días",
      description: "Te mantenemos al tanto por cada ciclo",
    },
    {
      number: "5",
      title: "Resultados y plan de mejora",
      description: "Confirmamos correcciones/actualizaciones en tu reporte y te guiamos en los siguientes pasos",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>
            <nav className="flex items-center gap-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </Link>
              <Link to="/calculadora" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Calculadora
              </Link>
              <a href="https://wa.me/17028614457" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Contactar
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Adacoys Insurance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-blue">
              Tu "seguro" de reparación de crédito
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Claro, honesto y sin fricción. Eliges un plan mensual que cubre la gestión de problemas comunes en tu historial de crédito.
            </p>
            <div className="glass-card p-6 max-w-3xl mx-auto border-yellow-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-left text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> No prometemos eliminar información correcta y vigente. Trabajamos sobre información inexacta, no verificable u obsoleta y buscamos mejoras con cartas de buena voluntad o acuerdos cuando el acreedor lo acepta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-cyan">
              ¿Qué cubrimos?
            </h2>
            <p className="text-lg text-muted-foreground">
              Trabajamos en múltiples aspectos de tu historial crediticio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageItems.map((item, index) => (
              <Card key={index} className="glass-card border-white/[0.08] hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Charge-off Explanation */}
          <div className="mt-12 glass-card p-8 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">¿Qué es un Charge-off?</h3>
            <p className="text-muted-foreground mb-4">
              Cuando una deuda lleva mucho tiempo en mora, el acreedor la "castiga" y la reporta negativamente. En Adacoys Insurance tratamos como charge-off:
            </p>
            <ul className="space-y-2">
              {[
                "Reposiciones (cuando recuperan tu auto por falta de pago)",
                "Tarjetas de crédito sin pagar (deuda castigada)",
                "Préstamos estudiantiles castigados",
                "Préstamos personales castigados",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-blue">
              Planes y Precios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu situación crediticia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`glass-card border-white/[0.08] hover:border-primary/30 transition-all duration-300 relative ${
                  selectedPlan === plan.id ? "border-primary/50" : ""
                } ${plan.glow}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Premium
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 mx-auto`}>
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-center mt-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{plan.period}</p>
                  </div>
                  <CardDescription className="text-center mt-4">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-white/[0.08] space-y-2">
                      {plan.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    className="w-full mt-6"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? "Plan Seleccionado" : "Seleccionar Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Excess Rule */}
          <div className="glass-card p-6 border-yellow-500/20 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Regla de exceso (todos los planes):</strong> Si traes más ítems de los cubiertos por tu plan, el trabajo extra se cotiza con 30% de descuento (previa aprobación).
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-cyan">
              Cómo funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Proceso paso a paso para reparar tu crédito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 border-white/[0.08] hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card p-6 border-primary/20 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Periodo de espera:</strong> Los planes Gold/Platinum/Centurion activan tras 6 cuotas. Si tienes daño activo y quieres empezar hoy, elige Full Cover (sin espera).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-blue">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 border-white/[0.08]">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Pueden borrar todo lo negativo?</h3>
              <p className="text-muted-foreground">
                No. Si la información es correcta y vigente, no prometemos eliminarla. Sí podemos disputar errores, exigir verificación y negociar actualizaciones cuando el acreedor lo acepta.
              </p>
            </div>

            <div className="glass-card p-6 border-white/[0.08]">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Cuánto tarda?</h3>
              <p className="text-muted-foreground">
                Los burós y acreedores suelen responder entre 30–45 días por ciclo. Según el caso, pueden requerirse 2–3 ciclos.
              </p>
            </div>

            <div className="glass-card p-6 border-white/[0.08]">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Qué incluye el periodo de espera?</h3>
              <p className="text-muted-foreground">
                Los planes Gold, Platinum y Centurion requieren 6 meses de cuotas antes de activarse. Esto asegura un compromiso mutuo. Si necesitas acción inmediata, elige Full Cover que comienza desde el primer mes.
              </p>
            </div>

            <div className="glass-card p-6 border-white/[0.08]">
              <h3 className="text-xl font-bold mb-3 text-primary">¿Qué pasa si tengo más problemas de los que cubre mi plan?</h3>
              <p className="text-muted-foreground">
                No te dejamos tirad@. El trabajo extra se cotiza con 30% de descuento sobre el precio regular. También podemos recomendarte subir de plan si es más conveniente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-blue">
            ¿Listo para mejorar tu crédito?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contáctanos hoy y comienza tu camino hacia una mejor salud financiera
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/17028614457" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                WhatsApp: 702-861-4457
              </Button>
            </a>
            <a href="mailto:admin@adacoysconsulting.com">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="h-5 w-5" />
                admin@adacoysconsulting.com
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/[0.08]">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Adacoys Consulting. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Insurance;
