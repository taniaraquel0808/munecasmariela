import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ana María R.",
        location: "Bogotá, Colombia",
        text: "¡Absolutamente enamorada de mi Sally! El nivel de detalle en las costuras y el cabello es increíble. Se nota que es un trabajo hecho con amor. ¡Gracias Muñecas Mariela por traer un pedacito de magia a mi casa!",
        stars: 5
    },
    {
        name: "Carlos D.",
        location: "Medellín, Colombia",
        text: "Compré el set de Jack y Sally para mi novia y quedó fascinada. La calidad de las telas hipoalergénicas es excelente, súper suaves. El envío fue rapidísimo. ¡Recomendado 100%!",
        stars: 5
    },
    {
        name: "Elena G.",
        location: "Quito, Ecuador",
        text: "Como coleccionista de Coraline, me costó encontrar una muñeca que capturara su esencia. Esta es, por lejos, la mejor. El impermeable amarillo es idéntico al de la película. Un orgullo que sea talento colombiano.",
        stars: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-4">
                <div className="section-header text-center mb-16 md:mb-24">
                    <p className="text-primary label-caps mb-4 uppercase tracking-widest font-bold text-sm">Lo que dicen nuestros coleccionistas</p>
                    <h2 className="headline-display text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
                        HISTORIAS DE <span className="text-primary">MAGIA</span>
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="p-8 md:p-10 rounded-[2rem] bg-secondary/30 border border-border/20 relative group hover:bg-secondary/50 transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors duration-500" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-foreground/90 leading-relaxed italic mb-8 text-lg">
                                "{t.text}"
                            </p>

                            <div>
                                <p className="font-bold text-foreground border-l-2 border-primary pl-4">
                                    {t.name}
                                </p>
                                <p className="text-xs text-foreground/50 pl-4 mt-1 uppercase tracking-widest font-bold">
                                    {t.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
