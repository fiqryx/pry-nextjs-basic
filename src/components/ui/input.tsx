import React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconProps
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center gap-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring',
          className
        )}
      >
        {icon?.position === 'left' && <InputIcon {...icon} />}
        <input
          type={type}
          className="w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
        {icon?.position === 'right' && <InputIcon {...icon} />}
      </div>
    )
  }
)
Input.displayName = "Input"


type IconProps = {
  render: string | React.ReactNode
  position: 'left' | 'right'
}

const InputIcon = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"span"> & IconProps
>(
  ({ render, className, ...props }, ref) => {
    if (typeof render === "string") {
      return (
        <span
          {...props}
          ref={ref}
          className={cn('text-muted-foreground', className)}
        >
          {render}
        </span>
      )
    }

    if (React.isValidElement(render)) {
      return (
        <span
          {...props}
          ref={ref}
          className={cn('text-muted-foreground', className)}
        >
          {render}
        </span>
      )
    }

    console.error("Invalid type for `render` prop in Icon:", render);
    return null;
  }
)

export {
  Input,
  InputIcon
}
