import * as React from "react"

const CarouselContext = React.createContext<any>(null)

function Carousel({ children, className, ...props }: any) {
    return (
        <CarouselContext.Provider value={{}}>
            <div className={className} {...props}>{children}</div>
        </CarouselContext.Provider>
    )
}

const CarouselContent = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = ({ className, ...props }: any) => (
    <button className={className} {...props}>←</button>
)

const CarouselNext = ({ className, ...props }: any) => (
    <button className={className} {...props}>→</button>
)

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
