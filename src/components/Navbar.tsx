import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import logo from '@/assets/logo-munecas-mariela.png';

interface NavbarProps {
  cartCount: number;
}

const Navbar = ({ cartCount }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full border-b backdrop-blur-xl border-border/20 bg-background/90">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Muñecas Mariela" 
            className="h-10 md:h-14 transition-transform hover:scale-105" 
          />
        </div>

        <div className="hidden md:flex space-x-12">
          <a href="#colecciones" className="nav-link">Catálogo</a>
          <a href="#taller" className="nav-link">El Taller</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer text-foreground/80 hover:text-primary transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-[10px] font-black text-primary-foreground bg-primary rounded-full border-2 border-background">
                {cartCount}
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/20 py-6">
          <div className="container flex flex-col gap-6">
            <a href="#colecciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
            <a href="#taller" className="nav-link" onClick={() => setIsMenuOpen(false)}>El Taller</a>
            <a href="#contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
