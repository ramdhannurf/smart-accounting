"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const columns_transaksi_jurnal = [
    {
        accessorKey: "tanggal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal" />
        ),
    },
    {
        accessorKey: "kontak",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kontak" />
        ),
    },
    {
        accessorKey: "deskripsi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Deskripsi" />
        ),
        cell: ({ row }: any) => (
            <div className="flex flex-col gap-0">
                <Link href={"/dashboard/expenses/detail"}>
                    <span className="text-primary cursor-pointer underline">{row.getValue("deskripsi")}</span>
                </Link>
                <small><i>{row.original.account}</i></small>
            </div>
        )
    },
    {
        accessorKey: "terima",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Terima (dalam IDR)" />
        ),
    },
    {
        accessorKey: "kirim",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kirim (dalam IDR)" />
        ),
    },
    {
        accessorKey: "saldo",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Saldo (dalam IDR)" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
]


export const columns_rekening_koran = [
    {
        accessorKey: "tanggal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal" />
        ),
    },
    {
        accessorKey: "deskripsi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Deskripsi" />
        ),
        cell: ({ row }: any) => (
            <div className="flex flex-col gap-0">
                <Link href={"/dashboard/expenses/detail"}>
                    <span className="text-primary cursor-pointer underline">{row.getValue("deskripsi")}</span>
                </Link>
                <small><i>{row.original.account}</i></small>
            </div>
        )
    },
    {
        accessorKey: "terima",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Terima (dalam IDR)" />
        ),
    },
    {
        accessorKey: "kirim",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kirim (dalam IDR)" />
        ),
    },
    {
        accessorKey: "saldo",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Saldo (dalam IDR)" />
        ),
    },
    {
        accessorKey: "sumber",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Sumber" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
]
