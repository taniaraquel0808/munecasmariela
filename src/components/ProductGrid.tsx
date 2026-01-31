import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

// Import product images
import jackSkellington from '@/assets/jack-skellington.png';
import sally from '@/assets/sally.png';
import jackSallyPair from '@/assets/jack-sally-pair.png';
import zero from '@/assets/zero.png';
import coraline from '@/assets/coraline.png';
import mafalda from '@/assets/mafalda.png';
import jackCojin from '@/assets/jack-cojin.png';
import emilyNoviaCadaver from '@/assets/emily-novia-cadaver.png';
import victorNoviaCadaver from '@/assets/victor-novia-cadaver.png';
import emilyVictorPair from '@/assets/emily-victor-pair.png';
import rick from '@/assets/rick.png';
import snoopyAstronauta from '@/assets/snoopy-astronauta.png';
import snoopyAviador from '@/assets/snoopy-aviador.png';
import snoopyPiloto from '@/assets/snoopy-piloto.png';

interface Product {
  id: number;
  name: string;
  price: string;
  cat: string;
  img: string;
  desc: string;
}

interface ProductGridProps {
  onAddToCart: () => void;
}

const products: Product[] = [
  // El Extraño Mundo de Jack
  { 
    id: 101, 
    name: "Jack Skellington", 
    price: "85.000", 
    cat: "Nightmare", 
    img: jackSkellington, 
    desc: "El Rey de Halloween en una versión de peluche hipoalergénico suave y detallada." 
  },
  { 
    id: 102, 
    name: "Sally", 
    price: "85.000", 
    cat: "Nightmare", 
    img: sally, 
    desc: "La dulce y valiente creación del Dr. Finkelstein, cosida con amor artesanal." 
  },
  { 
    id: 103, 
    name: "Jack & Sally", 
    price: "170.000", 
    cat: "Parejas", 
    img: jackSallyPair, 
    desc: "Set completo de la pareja eterna. Un regalo inolvidable hecho a mano." 
  },
  { 
    id: 104, 
    name: "Zero", 
    price: "45.000", 
    cat: "Nightmare", 
    img: zero, 
    desc: "El perro fantasma más tierno con su nariz de calabaza brillante." 
  },
  { 
    id: 105, 
    name: "Cojín Jack", 
    price: "55.000", 
    cat: "Decoración", 
    img: jackCojin, 
    desc: "Cojín decorativo con la icónica sonrisa de Jack Skellington." 
  },

  // Novia Cadáver
  { 
    id: 201, 
    name: "Emily (Novia Cadáver)", 
    price: "110.000", 
    cat: "Corpse Bride", 
    img: emilyNoviaCadaver, 
    desc: "La novia que cautivó a todos. Detalles en encaje y materiales hipoalergénicos premium." 
  },
  { 
    id: 202, 
    name: "Victor Van Dort", 
    price: "110.000", 
    cat: "Corpse Bride", 
    img: victorNoviaCadaver, 
    desc: "El caballero de corazón noble, recreado con la fidelidad del taller de Mariela." 
  },
  { 
    id: 203, 
    name: "Emily & Victor", 
    price: "220.000", 
    cat: "Parejas", 
    img: emilyVictorPair, 
    desc: "Colección premium de la pareja gótica más amada. Arte textil de lujo." 
  },

  // Snoopy Variaciones
  { 
    id: 301, 
    name: "Snoopy Aviador", 
    price: "55.000", 
    cat: "Snoopy", 
    img: snoopyAviador, 
    desc: "Snoopy listo para enfrentar al Barón Rojo. Casco y bufanda en materiales suaves." 
  },
  { 
    id: 302, 
    name: "Snoopy Astronauta", 
    price: "55.000", 
    cat: "Snoopy", 
    img: snoopyAstronauta, 
    desc: "Explorando la luna con la calidad de Muñecas Mariela. Hipoalergénico y duradero." 
  },
  { 
    id: 303, 
    name: "Snoopy Piloto de Carreras", 
    price: "55.000", 
    cat: "Snoopy", 
    img: snoopyPiloto, 
    desc: "Velocidad y ternura en una sola pieza. Ideal para coleccionistas de Peanuts." 
  },

  // Otros
  { 
    id: 401, 
    name: "Coraline Jones", 
    price: "85.000", 
    cat: "Coraline", 
    img: coraline, 
    desc: "Muñeca de la aventurera Coraline con su impermeable icónico amarillo." 
  },
  { 
    id: 402, 
    name: "Mafalda", 
    price: "65.000", 
    cat: "Clásicos", 
    img: mafalda, 
    desc: "La niña que quiere cambiar el mundo, ahora en un suave formato artesanal." 
  },
  { 
    id: 501, 
    name: "Rick Sánchez", 
    price: "75.000", 
    cat: "Adult Swim", 
    img: rick, 
    desc: "El científico más loco del multiverso. Peluche artesanal para fans de la serie." 
  },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="colecciones" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="section-header">
          <h2 className="headline-display text-4xl md:text-6xl lg:text-7xl mb-4">
            PERSONAJES DE <span className="text-primary">COLECCIÓN</span>
          </h2>
          <p className="text-muted-foreground label-caps">
            Peluches artesanales inspirados en el cine y la cultura pop
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onProductClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};

export default ProductGrid;
