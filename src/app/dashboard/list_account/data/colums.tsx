"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";

export const columns_account = [
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
        accessorKey: "number",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kode" />
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Akun" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className="flex gap-2">
                        {
                            row.original.lock === true ? <Lock size={12} className="self-center" /> : <></>
                        }
                        <span className="text-primary cursor-pointer underline">{row.getValue("name")}</span>
                    </div>

                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <div className="flex gap-2">
                                {
                                    row.original.lock === true ? <Lock size={12} className="self-center" /> : <></>
                                }
                                <h4 className="text-sm font-semibold">{row.getValue("name")}</h4>
                            </div>

                            <Separator className="my-2" />
                            <p className="text-sm">
                                Balance: Rp. {row.getValue("balance_amount")}
                            </p>
                            <small>For Demo Purposes, not Real Design.</small>
                        </div>
                        <div className="self-end mt-3">
                            <Button className="" size={'sm'}>Lihat detail</Button>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        )
    },
    {
        accessorKey: "category",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kategori Akun" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("category")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("category")}</h4>
                            <Separator className="my-2" />
                            <p className="text-sm">
                                Balance: Rp. {row.getValue("balance_amount")}
                            </p>
                            <small>For Demo Purposes, not Real Design.</small>
                        </div>
                        <div className="self-end mt-3">
                            <Button className="" size={'sm'}>Lihat detail</Button>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        )
    },
    {
        accessorKey: "tax_name",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Pajak" />
        ),
    },
    {
        accessorKey: "balance_amount",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Saldo (dalam IDR)" />
        ),
    },
]
