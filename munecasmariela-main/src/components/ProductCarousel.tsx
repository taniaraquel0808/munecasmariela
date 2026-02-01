import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
    images: string[];
    name: string;
}

export function ProductCarousel({ images, name }: ProductCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    if (!images || images.length === 0) return null;

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="h-full ml-0">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-0 h-full">
                        <div className="h-full w-full">
                            <img
                                src={image}
                                alt={`${name} - imagen ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {images.length > 1 && (
                <>
                    <CarouselPrevious className="left-2 bg-background/50 hover:bg-primary" />
                    <CarouselNext className="right-2 bg-background/50 hover:bg-primary" />
                </>
            )}
        </Carousel>
    )
}
