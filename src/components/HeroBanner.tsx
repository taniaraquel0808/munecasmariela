import { useState, useEffect } from 'react';
import coralineBanner from '@/assets/coraline-banner.png';
import laNoviaBanner from '@/assets/la-novia-banner.png';
import jackSallyBanner from '@/assets/jack-sally-banner.png';

interface Banner {
  img: string;
  title: string;
  subtitle: string;
  position: string;
}

const banners: Banner[] = [
  { 
    img: coralineBanner, 
    title: "Coraline Jones", 
    subtitle: "Mundos Mágicos de Selick",
    position: "object-[center_20%]"
  },
  { 
    img: laNoviaBanner, 
    title: "La Novia Cadáver", 
    subtitle: "Amor Más Allá de la Muerte",
    position: "object-[center_30%]"
  },
  { 
    img: jackSallyBanner, 
    title: "El Extraño Mundo de Jack", 
    subtitle: "Colección Especial Burton",
    position: "object-[center_40%]"
  }
];

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] pt-20 overflow-hidden">
      {banners.map((banner, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={banner.img} 
            alt={banner.title} 
            className={`object-cover ${banner.position} w-full h-full`} 
          />
          <div className="gradient-overlay" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center">
            <span className="banner-subtitle mb-4">
              {banner.subtitle}
            </span>
            <h2 className="banner-title text-4xl md:text-7xl lg:text-8xl text-foreground mb-8">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}
      
      {/* Banner Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBanner(i)}
            className={`banner-indicator ${
              i === currentBanner ? 'banner-indicator-active' : 'banner-indicator-inactive'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
