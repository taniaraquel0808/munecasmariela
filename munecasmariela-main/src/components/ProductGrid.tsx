const ProductGrid = ({ onAddToCart }: { onAddToCart: () => void }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Nuestra Colección</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-secondary/30 rounded mb-4" />
                            <h3 className="font-bold mb-2">Producto {i}</h3>
                            <p className="text-sm text-muted-foreground mb-4">Descripción del producto</p>
                            <button
                                onClick={onAddToCart}
                                className="w-full bg-primary text-primary-foreground py-2 rounded hover:opacity-90"
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
