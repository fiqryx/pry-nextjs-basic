"use client"
import React from "react"
import { Customer } from "@/types/customer"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { DataTableColumnHeader } from "@/components/pry/data-table"

export const columns: ColumnDef<Customer>[] = [
    {
        id: "select",
        enableSorting: false,
        enableHiding: false,
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        accessorKey: 'name',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => {
            const { name, photo } = row.original

            return (
                <div className="flex items-center gap-2 px-1 py-1.5">
                    <Avatar className="h-10 w-10 rounded-full text-sm">
                        <AvatarImage src={photo} alt={name} />
                        <AvatarFallback className="rounded-full">
                            {name.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{name}</span>
                </div>
            )
        },
    },
    {
        accessorKey: 'email',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <span>{row.getValue('email')}</span>
    },
    {
        accessorKey: 'location',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
        cell: ({ row }) => {
            const { city, country } = row.original
            return (
                <span>{`${city}, ${country}`}</span>
            )
        }
    },
    {
        accessorKey: 'phone',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Phone" />,
        cell: ({ row }) => <span className="text-nowrap">{row.getValue('phone')}</span>
    },
    {
        accessorKey: "createdAt",
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Signed Up" />,
        cell: ({ row }) => <span className="text-nowrap">
            {row.original.createdAt?.toLocaleString('en', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}
        </span>
    },
]