import { Instagram, Facebook, MessageCircle } from 'lucide-react';
// import logo from '@/assets/logo-munecas-mariela.png'; // Commenting out to avoid build error if missing

const Footer = () => {
    return (
        <footer id="contacto" className="footer-section text-muted-foreground bg-secondary/20 p-10">
            <div className="container mx-auto">
                <div className="grid gap-12 md:gap-16 md:grid-cols-3">
                    {/* Brand Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Muñecas Mariela</h3>
                        <p className="text-sm leading-relaxed italic text-muted-foreground/80">
                            Dando vida a personajes inolvidables con manos colombianas.
                            Un sueño de Mariela para el mundo, hecho con amor artesanal.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a
                                href="https://www.instagram.com/munecas_mariela/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon hover:text-pink-500 hover:border-pink-500 transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/573246401103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon hover:text-green-500 hover:border-green-500 transition-all duration-300"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <a
                                href="#"
                                className="social-icon hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="label-caps text-foreground mb-6 font-bold">Políticas y Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://munecasmariela.com/terminos-del-servicio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold uppercase tracking-wider hover:text-primary cursor-pointer transition-colors"
                                >
                                    Términos del Servicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://munecasmariela.com/politicas-de-envios-y-devoluciones/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold uppercase tracking-wider hover:text-primary cursor-pointer transition-colors"
                                >
                                    Políticas de Envío y Devoluciones
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/20 backdrop-blur-sm">
                        <h4 className="label-caps text-foreground mb-4 text-center font-bold">
                            Suscríbete a la Magia
                        </h4>
                        <p className="text-[10px] text-center uppercase font-bold text-muted-foreground/60 mb-6 tracking-widest">
                            Nuevos personajes y preventas exclusivas.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Tu e-mail"
                                className="flex-1 h-12 rounded-full border border-input px-3 bg-background"
                            />
                            <button className="px-6 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform">
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] italic opacity-50">
                        © 2026 MUÑECAS MARIELA | ARTE COLOMBIANO PARA EL MUNDO
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
