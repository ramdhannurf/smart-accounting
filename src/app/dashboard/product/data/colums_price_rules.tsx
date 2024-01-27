"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export const columns_price_rules = [
    {
        accessorKey: "nama_aturan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Aturan" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("nama_aturan")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("nama_aturan")}</h4>
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
        accessorKey: "jenis_aturan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Jenis Aturan" />
        ),
    },
    {
        accessorKey: "tanggal_mulai",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal Mulai" />
        ),
    },
    {
        accessorKey: "tanggal_berakhir",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal Berakhir" />
        ),
    },
    {
        accessorKey: "produk_kontak",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Produk & Kontak" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    }
]
