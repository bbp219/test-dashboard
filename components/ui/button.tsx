import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 border-2 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white border-red-600/40 hover:border-red-500/60 shadow-2xl hover:shadow-3xl backdrop-blur-xl",
        destructive:
          "bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white border-red-700/40 hover:border-red-600/60 shadow-2xl hover:shadow-3xl",
        outline:
          "border-ivory-300/60 hover:border-red-400/80 bg-white/20 backdrop-blur-xl hover:bg-red-50/30 text-gray-800 shadow-lg hover:shadow-xl",
        secondary:
          "bg-white/10 backdrop-blur-xl border-ivory-300/60 hover:border-red-400/80 text-gray-800 hover:bg-red-50/20 shadow-lg hover:shadow-xl",
        ghost:
          "border-transparent hover:border-red-400/80 hover:bg-red-50/20 backdrop-blur-sm text-gray-700 hover:text-red-700",
        link: "text-red-600 underline-offset-4 hover:underline border-transparent hover:border-red-400/80 backdrop-blur-sm",
      },
      size: {
        default: "h-12 px-8 py-3.5",
        sm: "h-10 rounded-xl px-6 py-2.5",
        lg: "h-14 rounded-2xl px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
