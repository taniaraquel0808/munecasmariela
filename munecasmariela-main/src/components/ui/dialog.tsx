import * as React from "react"

const Dialog = ({ children, open, onOpenChange }: any) => {
    if (!open) return null
    return <div onClick={() => onOpenChange(false)}>{children}</div>
}

const DialogContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={className} onClick={(e) => e.stopPropagation()} {...props}>
        {children}
    </div>
))
DialogContent.displayName = "DialogContent"

const DialogTitle = ({ children, className, ...props }: any) => (
    <h2 className={className} {...props}>{children}</h2>
)

export { Dialog, DialogContent, DialogTitle }
