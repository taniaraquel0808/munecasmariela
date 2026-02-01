import { X, ShieldCheck, Heart, Truck, Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ProductCarousel } from './ProductCarousel';

interface Product {
    id: number;
    name: string;
    price: string;
    cat: string;
    img: string;
    images: string[];
    desc: string;
    longDesc?: string;
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

    const whatsappLink = `https://wa.me/573246401103?text=${encodeURIComponent(`¡Hola! Estoy interesado en el personaje "${product.name}". ¿Podrías darme más información?`)}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 bg-card border-border/30 overflow-hidden max-h-[95vh] overflow-y-auto">
                <DialogTitle className="sr-only">{product.name}</DialogTitle>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-all"
                >
                    <X size={20} />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative aspect-square md:aspect-auto md:h-full bg-secondary/30 min-h-[350px] md:min-h-[500px]">
                        <ProductCarousel images={product.images} name={product.name} />
                        <div className="absolute top-4 left-4 z-10">
                            <span className="category-badge bg-background/80 backdrop-blur px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                {product.cat}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {/* Header */}
                            <div className="mb-6">
                                <p className="text-primary label-caps mb-2 text-xs font-bold uppercase tracking-wider">Colección Exclusiva</p>
                                <h2 className="headline-display text-3xl md:text-4xl text-foreground mb-3 font-bold">
                                    {product.name}
                                </h2>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-display text-foreground font-light">
                                        ${product.price}
                                    </span>
                                    <span className="text-foreground/60 text-sm">COP</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-foreground/90 leading-relaxed text-sm">
                                    {product.longDesc || product.desc}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                                    <ShieldCheck className="text-primary shrink-0" size={20} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">100% Hipoalergénico</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                                    <Sparkles className="text-primary shrink-0" size={20} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Diseño Exclusivo</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                                    <Heart className="text-primary shrink-0" size={20} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Hecho con Amor</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                                    <Truck className="text-primary shrink-0" size={20} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Envío Nacional</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-primary text-primary-foreground py-5 text-sm font-bold flex items-center justify-center gap-2 rounded-xl hover:opacity-90 transition-opacity"
                            >
                                🛒 Adoptar este Personaje Ahora
                            </button>

                            <div className="grid grid-cols-2 gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 rounded-full border border-green-500/50 hover:bg-green-500/10 text-green-500 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                                >
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://www.instagram.com/munecas_mariela/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 rounded-full border border-pink-500/50 hover:bg-pink-500/10 text-pink-500 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                                >
                                    <Instagram size={18} />
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailModal;
