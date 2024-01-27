"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const columns_gudang = [
    {
        accessorKey: "kode_gudang",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kode Gudang" />
        ),
    },
    {
        accessorKey: "nama_gudang",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Gudang" />
        ),
        cell: ({ row }: any) => (
            <Link href={"/dashboard/warehouse/detail"}>
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
            </Link>
        )
    },
    {
        accessorKey: "alamat",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Alamat" />
        ),
    },
    {
        accessorKey: "keterangan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Keterangan" />
        ),
    }
]
