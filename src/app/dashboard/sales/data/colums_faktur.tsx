"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export const columns_faktur = [
    {
        accessorKey: "tanggal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal" />
        ),
    },
    {
        accessorKey: "nomor",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nomor" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("nomor")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("nomor")}</h4>
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
        accessorKey: "pelanggan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Pelanggan" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("pelanggan")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("pelanggan")}</h4>
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
        accessorKey: "tanggal_jatuh_tempo",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal Jatuh Tempo" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
    {
        accessorKey: "sisa_tagihan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Sisa Tagihan" />
        ),
    },
    {
        accessorKey: "total",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Total" />
        ),
    },
    {
        accessorKey: "tag",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tag" />
        ),
    },
]
