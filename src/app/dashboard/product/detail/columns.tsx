"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export const columns_transaksi_produk = [
    {
        accessorKey: "tanggal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal" />
        ),
    },
    {
        accessorKey: "tipe",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tipe" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("tipe")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("tipe")}</h4>
                            <Separator className="my-2" />
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
        accessorKey: "qty",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Qty" />
        ),
    },
]

export const columns_unit = [
    {
        accessorKey: "unit_dasar",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Unit Dasar" />
        ),
    },
    {
        accessorKey: "qty",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Qty" />
        ),
    },
    {
        accessorKey: "harga_beli",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Harga Beli" />
        ),
    },
    {
        accessorKey: "harga_jual",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Harga Jual" />
        ),
    },
]

export const columns_info_gudang = [
    {
        accessorKey: "nama_gudang",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Gudang" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("nama_gudang")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("nama_gudang")}</h4>
                            <Separator className="my-2" />
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
        accessorKey: "stok_gudang",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Stok di gudang" />
        ),
    },
]