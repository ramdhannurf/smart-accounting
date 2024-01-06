"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";

export const columns_contact = [
    {
        accessorKey: "kode_account",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Panggilan" />
        ),
    },
    {
        accessorKey: "nama_akun",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Perusahaan" />
        ),
    },
    {
        accessorKey: "saldo_bank",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Alamat" />
        ),
    },
    {
        accessorKey: "saldo_di_jurnal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="No Handphone" />
        ),
    },
    {
        accessorKey: "taksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Saldo" />
        ),
    },
]
