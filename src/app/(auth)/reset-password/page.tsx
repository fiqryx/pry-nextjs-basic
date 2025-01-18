import { createMetadata } from "@/lib/metadata"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata = createMetadata({ title: 'Reset password' })

export default function Page() {
    return (
        <div className="w-full h-screen bg-background flex flex-col items-center justify-center px-4">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Reset password
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to reset your password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="sr-only">Email</Label>
                            <Input
                                required
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}