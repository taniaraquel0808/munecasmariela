import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import WorkshopSection from '@/components/WorkshopSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar cartCount={cartCount} />
      <HeroBanner />
      <WorkshopSection />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default Index;
