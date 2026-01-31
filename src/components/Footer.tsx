import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo-munecas-mariela.png';

const Footer = () => {
  return (
    <footer id="contacto" className="footer-section text-muted-foreground">
      <div className="container">
        <div className="grid gap-12 md:gap-16 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <img 
              src={logo} 
              alt="Muñecas Mariela" 
              className="h-14 mb-6" 
            />
            <p className="text-sm leading-relaxed italic text-muted-foreground/80">
              Dando vida a personajes inolvidables desde hace años. 
              Un sueño de Mariela para el mundo.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="social-icon">
                <Instagram size={18} />
              </div>
              <div className="social-icon">
                <Facebook size={18} />
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="label-caps text-foreground mb-6">Universo Mariela</h4>
            <ul className="space-y-3">
              {[
                'Peluches Tim Burton',
                'Colección Coraline',
                'Snoopy Aviador y Más',
                'Muñecos Hipoalergénicos'
              ].map((item) => (
                <li 
                  key={item} 
                  className="text-[11px] font-bold uppercase tracking-wider hover:text-primary cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/20">
            <h4 className="label-caps text-foreground mb-4 text-center">
              Envíos a Todo el Mundo
            </h4>
            <p className="text-[11px] text-center uppercase font-bold text-muted-foreground mb-6">
              Desde Colombia con amor y magia artesanal.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu e-mail" 
                className="input-dark flex-1"
              />
              <button className="btn-primary px-5">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] italic opacity-50">
            © 2026 MUÑECAS MARIELA | EL SUEÑO DE UNA ARTESANA
          </p>
          <div className="flex gap-6 text-[9px] font-bold uppercase tracking-wider opacity-30">
            <span>Jack Skellington Peluche</span>
            <span>Muñecos Coraline</span>
            <span>Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
