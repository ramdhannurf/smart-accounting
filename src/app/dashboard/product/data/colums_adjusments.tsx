"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const colums_adjusments = [
    {
        accessorKey: "tanggal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal" />
        ),
    },
    {
        accessorKey: "no_transaksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="No. Transaksi" />
        ),
        cell: ({ row }: any) => (
            <Link href={"/dashboard/warehouse/stock_adjusments/detail"}>

                <HoverCard>
                    <HoverCardTrigger asChild>
                        <span className="text-primary cursor-pointer underline">{row.getValue("no_transaksi")}</span>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h4 className="text-sm font-semibold">{row.getValue("no_transaksi")}</h4>
                                <Separator className="my-2" />
                                <small>For Demo Purposes, not Real Design.</small>
                            </div>
                            <div className="self-end mt-3">
                                <Button className="" size={'sm'}>Lihat detail</Button>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </Link>
        )
    },
    {
        accessorKey: "kategori",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kategori" />
        ),
    },
    {
        accessorKey: "akun",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Akun" />
        ),
    },
    {
        accessorKey: "gudang",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Gudang" />
        ),
        cell: ({ row }: any) => (
            row.getValue("gudang") !== "Tidak ditentukan" ? <Link href={"/dashboard/warehouse/detail"}><HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("gudang")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("gudang")}</h4>
                            <Separator className="my-2" />
                            <small>For Demo Purposes, not Real Design.</small>
                        </div>
                        <div className="self-end mt-3">
                            <Button className="" size={'sm'}>Lihat detail</Button>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard></Link> : <span>{row.getValue("gudang")}</span>
        )
    },
    {
        accessorKey: "tag",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tag" />
        ),
    },
]
