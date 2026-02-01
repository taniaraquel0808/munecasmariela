
const HeroBanner = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
            {/* Placeholder background since assets might be missing, but try to use one if valid */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2950&auto=format&fit=crop"
                alt="Muñecas Mariela Banner"
                className="w-full h-full object-cover opacity-60"
            />

            <div className="relative z-20 text-center px-4">
                <span className="block text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">Colección Artesanal</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
                    MUÑECAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">MARIELA</span>
                </h1>
                <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-8">
                    Donde la fantasía cobra vida en cada puntada. Personajes de películas, series y sueños hechos realidad.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                    Ver Colección
                </button>
            </div>
        </div>
    )
}

export default HeroBanner
