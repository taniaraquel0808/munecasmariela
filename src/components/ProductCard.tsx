interface Product {
  id: number;
  name: string;
  price: string;
  cat: string;
  img: string;
  desc: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="card-product group">
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
      </div>
      
      <div className="p-7">
        <h3 className="text-xl md:text-2xl font-display uppercase italic group-hover:text-primary transition-colors tracking-tight">
          {product.name}
        </h3>
        <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed font-medium min-h-[48px]">
          {product.desc}
        </p>
        
        <div className="flex items-center justify-between mt-6 gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
              Inversión COP
            </span>
            <span className="text-2xl md:text-3xl font-display text-foreground">
              ${product.price}
            </span>
          </div>
          <button 
            onClick={onAddToCart}
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
