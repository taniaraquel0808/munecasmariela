import { ShieldCheck, Scissors, Heart } from 'lucide-react';
import tallerImage from '@/assets/taller-mariela.png';
import logo from '@/assets/logo-munecas-mariela.png';

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
            <div className="absolute top-8 left-8 bg-primary p-5 rounded-3xl font-black text-[10px] tracking-wider text-primary-foreground shadow-2xl animate-float text-left">
              <Heart className="mb-1" size={16} />
              MADE <br /> WITH <br /> LOVE
            </div>
          </div>
          
          <div>
            <img 
              src={logo} 
              alt="Logo Muñecas Mariela" 
              className="h-20 md:h-24 mb-6" 
            />
            <h2 className="headline-display text-4xl md:text-6xl lg:text-7xl mb-8">
              EL SUEÑO <br />
              <span className="text-primary">DE MARIELA</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed italic">
              Lo que comenzó como un pequeño sueño artesanal ha evolucionado en un taller 
              dedicado a dar vida a personajes icónicos. Mariela diseña cada pieza buscando 
              la perfección en cada costura.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="feature-card">
                <ShieldCheck className="text-primary" size={32} />
                <h4 className="label-caps text-foreground">100% Hipoalergénico</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Materiales seguros y certificados para todas las edades.
                </p>
              </div>
              <div className="feature-card">
                <Scissors className="text-primary" size={32} />
                <h4 className="label-caps text-foreground">Arte de Autor</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Cada muñeco y muñeca es una obra de arte única e irrepetible.
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
