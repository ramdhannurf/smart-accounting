"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";

export const columns = [
    {
        accessorKey: "kode_account",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kode Akun" />
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
            <DataTableColumnHeader column={column} title="Saldo Bank" />
        ),
    },
    {
        accessorKey: "saldo_di_jurnal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Saldo di Jurnal" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Aksi" />
        ),
    },
]
