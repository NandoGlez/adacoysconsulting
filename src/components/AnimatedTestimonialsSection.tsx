import * as React from "react"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/ui/animated-cards-stack"

import testimonial1 from "@/assets/testimonial-1.jpg"
import testimonial2 from "@/assets/testimonial-2.jpg"
import testimonial3 from "@/assets/testimonial-3.png"
import testimonial4 from "@/assets/testimonial-4.jpg"
import testimonial5 from "@/assets/testimonial-5.png"
import testimonial6 from "@/assets/testimonial-6.jpg"
import testimonial7 from "@/assets/testimonial-7.jpg"
import testimonial8 from "@/assets/testimonial-8.jpg"

const TESTIMONIALS = [
  { id: 1, image: testimonial1 },
  { id: 2, image: testimonial2 },
  { id: 3, image: testimonial3 },
  { id: 4, image: testimonial4 },
  { id: 5, image: testimonial5 },
  { id: 6, image: testimonial6 },
  { id: 7, image: testimonial7 },
  { id: 8, image: testimonial8 },
]

export function AnimatedTestimonialsSection() {
  return (
    <section className="relative w-full bg-[#030303] px-8 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03]" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-sm text-accent tracking-wider uppercase">Resultados Reales</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white/90">Nuestros Clientes,</span>
            <br />
            <span className="gradient-text-blue">Sus Éxitos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Casos reales de clientes que transformaron su crédito con nuestra ayuda.
          </p>
        </div>

        <ContainerScroll className="container h-[300vh]">
          <div className="sticky left-0 top-0 h-svh w-full py-12">
            <CardsContainer className="mx-auto size-full h-[500px] w-[340px] md:h-[600px] md:w-[400px]">
              {TESTIMONIALS.map((testimonial, index) => (
                <CardTransformed
                  arrayLength={TESTIMONIALS.length}
                  key={testimonial.id}
                  variant="dark"
                  index={index + 2}
                  className="overflow-hidden !rounded-xl !p-0 border-white/10"
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonio de cliente ${testimonial.id}`}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}

export default AnimatedTestimonialsSection
