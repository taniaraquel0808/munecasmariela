import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { products, type Product } from '@/data/products';

interface ProductGridProps {
  onAddToCart: () => void;
}

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
          <p className="text-foreground/80 label-caps">
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