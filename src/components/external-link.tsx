'use client'
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ExternalLink({
    className,
    children,
    title,
    ...props
}: React.ComponentProps<typeof Link>) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        {...props}
                        className={cn(
                            buttonVariants({ size: 'icon', variant: 'ghost' }),
                            'h-7 w-7 p-2',
                            className
                        )}
                    >
                        {children}
                    </Link>
                </TooltipTrigger>
                {title && (
                    <TooltipContent side="bottom">
                        {title}
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    )
}