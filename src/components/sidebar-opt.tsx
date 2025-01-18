import Link from "next/link"
import { cn } from "@/lib/utils"

import { SquareArrowOutUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

import {
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function SidebarOpt() {
    return (
        <SidebarMenu className="group-data-[collapsible=icon]:hidden">
            <SidebarMenuItem>
                <Card className="shadow-none">
                    <form>
                        <CardHeader className="p-4 pb-0">
                            <CardTitle className="text-sm">Need more features?</CardTitle>
                            <CardDescription>
                                Check out our Pro solution template.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-2.5 p-4">
                            <Link
                                target="_blank"
                                href={process.env.NEXT_PUBLIC_PRO_SITE_URL ?? '#'}
                                className={cn(
                                    buttonVariants({ size: 'sm' }),
                                    'w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none'
                                )}
                            >
                                Pro version <SquareArrowOutUpRight />
                            </Link>
                        </CardContent>
                    </form>
                </Card>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
