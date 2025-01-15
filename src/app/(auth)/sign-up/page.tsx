import Link from "next/link"
import { createMetadata } from "@/lib/metadata"
import { SingUpForm } from "./components/sign-up-form"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata = createMetadata({ title: 'Sign up' })

export default function Page() {
    return (
        <div className="w-full h-screen bg-background flex items-center justify-center px-4">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Sign up
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to sign up to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SingUpForm />
                    <div className="mt-4 text-center text-sm">
                        Already have account?{" "}
                        <Link href="/sign-in" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
