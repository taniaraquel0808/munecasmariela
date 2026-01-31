import { X, ShieldCheck, Heart, Truck, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  price: string;
  cat: string;
  img: string;
  desc: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }: ProductDetailModalProps) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-card border-border/30 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-secondary/30">
            <img 
              src={product.img} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="category-badge">
                {product.cat}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <p className="text-primary label-caps mb-2">Colección Exclusiva</p>
              <h2 className="headline-display text-3xl md:text-4xl text-foreground mb-3">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-display text-foreground">
                  ${product.price}
                </span>
                <span className="text-muted-foreground text-sm">COP</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.desc}
              </p>
              <p className="text-muted-foreground/80 leading-relaxed text-sm italic">
                Cada pieza es elaborada completamente a mano por artesanas colombianas expertas, 
                utilizando materiales premium hipoalergénicos certificados. No encontrarás dos 
                piezas idénticas — cada muñeco tiene su propia personalidad única.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <ShieldCheck className="text-primary shrink-0" size={20} />
                <span className="text-[11px] font-bold uppercase tracking-wide">100% Hipoalergénico</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <Award className="text-primary shrink-0" size={20} />
                <span className="text-[11px] font-bold uppercase tracking-wide">Pieza Numerada</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <Heart className="text-primary shrink-0" size={20} />
                <span className="text-[11px] font-bold uppercase tracking-wide">Hecho con Amor</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <Truck className="text-primary shrink-0" size={20} />
                <span className="text-[11px] font-bold uppercase tracking-wide">Envío Mundial</span>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="mb-6 p-4 rounded-xl border border-primary/30 bg-primary/5">
              <p className="text-sm text-center">
                <span className="text-primary font-bold">⚡ Edición Limitada</span>
                <span className="text-muted-foreground"> — Solo quedan pocas unidades de esta pieza artesanal.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-auto space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full btn-primary py-5 text-sm"
              >
                🛒 Adoptar este Personaje Ahora
              </button>
              <p className="text-center text-[10px] text-muted-foreground uppercase tracking-wider">
                Pago seguro • Garantía de satisfacción • Envío asegurado
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
