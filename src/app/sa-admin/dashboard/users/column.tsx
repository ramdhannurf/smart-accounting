"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { truncateText } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label";


export const columns_users = [
    {
        id: "select",
        header: ({ table }: any) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }: any) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nama_user",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama User" />
        ),
    },
    {
        accessorKey: "nama_perusahaan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Perusahaan" />
        ),
        cell: ({ row }: any) => {
            return <div className="max-w-[300px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <p className="cursor-pointer">{truncateText(row.getValue("deskripsi"), 80)}</p>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Label className="font-bold">Deskripsi</Label>
                        <Separator className="my-2" />
                        <p className="text-sm">{row.getValue("deskripsi")}</p>
                    </PopoverContent>
                </Popover>
            </div>
        }
    },
    {
        accessorKey: "email",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        id: "aksi",
        cell: ({ row }: any) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
