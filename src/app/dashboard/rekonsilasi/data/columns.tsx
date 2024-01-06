"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";

export const columns_rekonsilasi = [
    {
        accessorKey: "no",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="No" />
        ),
    },
    {
        accessorKey: "nama_akun",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Akun" />
        ),
    },
    {
        accessorKey: "saldo_bank",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Terapkan ke" />
        ),
    },
    {
        accessorKey: "saldo_di_jurnal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Aturan" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kondisi Pencocokan" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Catat Sebagai" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Catat Otomatis" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tindakan" />
        ),
    },
]
