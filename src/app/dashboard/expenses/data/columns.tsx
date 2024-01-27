"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const columns_expenses = [
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
            <Link href={"/dashboard/expenses/detail"}>

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
            </Link>
        )
    },
    {
        accessorKey: "kategori",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Kategori" />
        ),
        cell: ({ row }: any) => (
            <Link className="text-primary cursor-pointer underline" href={"/dashboard/list_account/detail"}>{row.getValue("kategori")}</Link>
        ),
    },
    {
        accessorKey: "penerima",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Penerima" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }: any) => {
            var color = "";

            if (row.getValue("status") === "Paid") {
                color = "#22c461";
            } else if (row.getValue("status") === "Draf") {
                color = "#78716c";
            } else if (row.getValue("status") === "Pending") {
                color = "#f3731a";
            } else if (row.getValue("status") === "Revisi") {
                color = "#dc204b";
            }
            return <Badge style={{ backgroundColor: color }}>{row.getValue("status")}</Badge>
        },
    },
    {
        accessorKey: "sisa_tagihan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Sisa Tagihan (Dalam IDR)" />
        ),
    },
    {
        accessorKey: "total",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Total (Dalam IDR)" />
        ),
    },
    {
        accessorKey: "tags",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tags" />
        ),
    },
]
