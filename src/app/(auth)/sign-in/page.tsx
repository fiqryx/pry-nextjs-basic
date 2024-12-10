import Link from "next/link"
import { Metadata } from "next"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SignInForm } from "./components/sign-in-form"

export const metadata: Metadata = {
    title: "Sign In | " + process.env.APP_NAME,
    description: "Authentication forms built using the components.",
}

export default function Page() {
    return (
        <div className="w-full h-screen bg-background flex items-center justify-center px-4">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Sign in
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignInForm />
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
