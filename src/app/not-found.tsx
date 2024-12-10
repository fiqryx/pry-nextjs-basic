import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeftIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
    title: `404: This page could not be found | ${process.env.APP_NAME}`,
    description: "",
};

export default function NotFound() {
    return (
        <div className="flex flex-col h-[100vh] bg-background justify-center items-center p-4 gap-10">
            {/* <div className="relative flex justify-center items-center w-full h-72">
                <Icons.notFound className="size-52 text-destructive" />
            </div> */}
            <div className="grid justify-center items-center gap-4">
                <h3 className="text-4xl font-semibold tracking-tight text-center">
                    404: This page could not be found
                </h3>
                <span className="text-center text-muted-foreground">
                    You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
                </span>
            </div>
            <Link href='/' className={buttonVariants({ className: 'w-fit' })}>
                <ArrowLeftIcon />
                Go back to home
            </Link>
        </div>
    )
}