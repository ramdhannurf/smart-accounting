"use client"
import { DataTableColumnHeader } from "@/components/table/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const columns_company = [
    {
        accessorKey: "nama_perusahaan",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Nama Perusahaan" />
        ),
        cell: ({ row }: any) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-primary cursor-pointer underline">{row.getValue("nama_perusahaan")}</span>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="text-sm font-semibold">{row.getValue("nama_perusahaan")}</h4>
                            <Separator className="my-2" />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam suscipit accusamus sapiente distinctio dolores ipsum minima qui enim corrupti fugiat earum ab eligendi, laborum pariatur tenetur cumque, eaque, velit dicta!
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
        accessorKey: "role",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Peran" />
        ),
    },
    {
        accessorKey: "created_at",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Tanggal Dibuat" />
        ),
    },
    {
        accessorKey: "aksi",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="" />
        ),
        cell: ({ row }: any) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <DotsHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Arsip</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Hapus</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
]
