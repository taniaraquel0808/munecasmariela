import { Truck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  cat: string;
  img: string;
  images?: string[];
  desc: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onProductClick: () => void;
}

const ProductCard = ({ product, onAddToCart, onProductClick }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart();
  };

  return (
    <div 
      className="card-product group cursor-pointer"
      onClick={onProductClick}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute top-5 left-5">
          <span className="category-badge">
            {product.cat}
          </span>
        </div>
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="label-caps text-primary">Ver Detalles</span>
        </div>
      </div>
      
      <div className="p-7">
        <h3 className="text-xl md:text-2xl font-display uppercase italic group-hover:text-primary transition-colors tracking-tight">
          {product.name}
        </h3>
        <p className="mt-3 product-description min-h-[48px] line-clamp-2">
          {product.desc}
        </p>
        
        {/* Free shipping badge */}
        <div className="flex items-center gap-2 mt-3 text-primary">
          <Truck size={16} />
          <span className="text-xs font-bold uppercase tracking-wide">Envío Gratis</span>
        </div>
        
        <div className="flex items-center justify-between mt-5 gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] text-foreground/60 font-bold uppercase tracking-widest">
              Inversión COP
            </span>
            <span className="text-2xl md:text-3xl font-display text-foreground">
              ${product.price}
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="btn-primary whitespace-nowrap"
          >
            Adoptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
