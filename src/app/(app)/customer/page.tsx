import type { Metadata } from "next";
import { columns } from "./components/customer-columns";
import { customers } from "@/types/customer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Datatable } from "@/components/pry/data-table";

import {
    Breadcrumb,
    Dashboard
} from "@/components/app-dashboard"
import {
    SearchIcon,
    HardDriveDownloadIcon,
    HardDriveUploadIcon,
    PlusIcon,
} from "lucide-react";


const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Customers' },
]

export const metadata: Metadata = {
    title: `Customers | ${process.env.APP_NAME}`,
    description: "",
};

export default function Page() {
    return (
        <Dashboard breadcrumb={breadcrumb} className="container mx-auto sm:pt-16">
            <div className="flex flex-col gap-8">
                <div className="grid gap-2">
                    <div className="flex flex-wrap justify-between gap-4">
                        <h1 className="text-2xl sm:text-4xl font-semibold">
                            Customers
                        </h1>
                        <Button className="px-6 sm:h-10 sm:px-6">
                            <PlusIcon />
                            Add
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="ghost">
                            <HardDriveUploadIcon />
                            Import
                        </Button>
                        <Button variant="ghost">
                            <HardDriveDownloadIcon />
                            Export
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Input
                        type="search"
                        className="max-w-sm h-10"
                        placeholder="Search customer"
                        icon={{
                            position: 'left',
                            render: <SearchIcon className="size-5" />
                        }}
                    />
                    <Datatable
                        pagination
                        columns={columns}
                        data={customers}
                        paginationOptions={{
                            pageIndex: 0,
                            pageSize: 5,
                            pageSizeOptions: [5, 10, 25]
                        }}
                    />
                </div>
            </div>
        </Dashboard>
    )
}
