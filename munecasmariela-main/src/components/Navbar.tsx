import { ShoppingCart, Menu, Search } from 'lucide-react';

const Navbar = ({ cartCount }: { cartCount: number }) => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <div className="flex items-center gap-2">
                    <Menu className="md:hidden" />
                    <span className="font-bold text-xl tracking-tight">Muñecas Mariela</span>
                </div>

                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-primary transition-colors">Inicio</a>
                    <a href="#" className="hover:text-primary transition-colors">Catálogo</a>
                    <a href="#" className="hover:text-primary transition-colors">Taller</a>
                    <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
                </div>

                <div className="flex items-center gap-4">
                    <Search size={20} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                    <div className="relative cursor-pointer">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
