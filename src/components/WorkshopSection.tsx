import { ShieldCheck, Scissors } from 'lucide-react';
import tallerImage from '@/assets/taller-mariela.png';

const WorkshopSection = () => {
  return (
    <section id="taller" className="py-24 bg-background border-y border-border/20">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative">
            <img 
              src={tallerImage} 
              alt="Taller de Mariela" 
              className="rounded-4xl shadow-2xl border border-border/20" 
            />
            <div className="absolute top-8 right-8 bg-primary p-5 rounded-3xl font-black text-[10px] tracking-wider text-primary-foreground transform rotate-12 shadow-2xl animate-float">
              DREAMS <br /> MADE <br /> BY HAND
            </div>
          </div>
          
          <div>
            <h2 className="headline-display text-4xl md:text-6xl lg:text-7xl mb-8">
              EL SUEÑO <br />
              <span className="text-primary">DE MARIELA</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed italic">
              Lo que comenzó como un pequeño sueño artesanal ha evolucionado en un taller 
              dedicado a dar vida a personajes icónicos. Mariela diseña cada pieza buscando 
              la perfección en cada costura.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="feature-card">
                <ShieldCheck className="text-primary" size={32} />
                <h4 className="label-caps text-foreground">Hipoalergénico</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Materiales seguros y certificados para todas las edades.
                </p>
              </div>
              <div className="feature-card">
                <Scissors className="text-primary" size={32} />
                <h4 className="label-caps text-foreground">Arte de Autor</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Cada muñeco y muñeca es una pieza numerada y única.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
