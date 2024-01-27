"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const colums_barang = [
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
        accessorKey: "nama_product",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Produk" />
        ),
        cell: ({ row }: any) => (
            <Link href={"/dashboard/product/detail"}>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <span className="text-primary cursor-pointer underline">{row.getValue("nama_product")}</span>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h4 className="text-sm font-semibold">{row.getValue("nama_product")}</h4>
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
        accessorKey: "kategori_product",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kode Produk" />
        ),
    },
    {
        accessorKey: "kode_product",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kode Produk" />
        ),
    },
    {
        accessorKey: "total_stock",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Total Stok" />
        ),
    },
    {
        accessorKey: "batas_minimum",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Batas Minimum" />
        ),
    },
    {
        accessorKey: "unit",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Unit" />
        ),
    },
    {
        accessorKey: "harga_rata",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Harga Rata-Rata" />
        ),
    },
    {
        accessorKey: "harga_beli_terakhir",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Harga Beli Terakhir" />
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
    }
]
