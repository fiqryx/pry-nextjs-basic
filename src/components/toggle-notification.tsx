'use client'
import React from "react"
import { cn } from "@/lib/utils"
import { BellIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"


export function ToggleNotification({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="ghost"
                        className={cn("h-7 w-7 p-2", className)} {...props}
                    >
                        <BellIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    Notification
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}