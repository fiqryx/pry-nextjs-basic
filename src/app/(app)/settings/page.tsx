import type { Metadata } from "next";

import {
    Breadcrumb,
    Dashboard
} from "@/components/app-dashboard"
import { SettingsNotification } from "./components/settings-notification";
import { SettingsPassword } from "./components/settings-password";


const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' },
]

export const metadata: Metadata = {
    title: `Settings | ${process.env.APP_NAME}`,
    description: "",
}

export default function Page() {
    return (
        <Dashboard breadcrumb={breadcrumb} className="container mx-auto sm:pt-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl sm:text-4xl font-semibold">
                    Settings
                </h1>
                <SettingsNotification />
                <SettingsPassword />
            </div>
        </Dashboard>
    )
}