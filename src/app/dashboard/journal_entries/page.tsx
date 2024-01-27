"use client"
import { ComboBox } from "@/components/ComboBox";
import { DrawerDialog } from "@/components/Dialog";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { DatePicker } from "@/components/date-time";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ChevronRight, MoveRight, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function JournalEntries() {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Jurnal Umum" subtitle="Transaksi"></Title>
                    <Card>
                        <CardContent className="py-6">
                            <div className="">
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <Label>No. Transaksi</Label>
                                        <Input />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Tanggal Transaksi</Label>
                                        <DatePicker />
                                    </div>
                                </div>
                                <Separator className="my-5" />
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-end gap-4">
                                        <Button onClick={() => setOpen(true)}>Tambah Data</Button>
                                    </div>
                                    <div className="overflow-y-auto">
                                        <Table>
                                            <TableHeader className="bg-primary">
                                                <TableRow>
                                                    <TableHead className="text-white">Akun</TableHead>
                                                    <TableHead className="text-white">Deskripsi</TableHead>
                                                    <TableHead className="text-white">Debit</TableHead>
                                                    <TableHead className="text-white">Kredit</TableHead>
                                                    <TableHead className="text-white"></TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Alicia Koch</TableCell>
                                                    <TableCell>Paid</TableCell>
                                                    <TableCell>Rp. 200.000</TableCell>
                                                    <TableCell>Rp. 100.000</TableCell>
                                                    <TableCell>
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
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Hapus</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                                <Separator className="my-5" />
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Memo</Label>
                                            <Textarea />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Attachment</Label>
                                            <Input type="file" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tag</Label>
                                            <Input />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Card className="shadow-none">
                                            <CardContent className="py-4">
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between">
                                                        <p className="font-semibold">Total Debit</p>
                                                        <p className="font-semibold">Rp. 200.000</p>
                                                    </div>
                                                    <Separator className="my-5" />
                                                    <div className="flex justify-between">
                                                        <p className="font-semibold">Total Kredit</p>
                                                        <p className="font-semibold">Rp. 100.000</p>
                                                    </div>
                                                    {/* <Separator className="my-5" />
                                                    <div className="flex justify-between">
                                                        <p className="text-xl font-semibold">Total</p>
                                                        <p className="text-xl font-semibold">Rp. 110.000</p>
                                                    </div> */}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end mt-5">
                                    <Button onClick={() => router.back()} variant={"outline"}>Batal</Button>
                                    <Popover>
                                        <PopoverTrigger><Button>Buat Jurnal Umum</Button></PopoverTrigger>
                                        <PopoverContent className="p-2">
                                            <div className="flex flex-col">
                                                <Button variant={"ghost"}>Buat Jurnal Umum</Button>
                                                <Button variant={"ghost"}>Buat & Baru</Button>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah Transaksi" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Akun</Label>
                        <ComboBox select={[]} placeholder="Pilih akun" name="akun" search="Cari akun..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Deskripsi</Label>
                        <Textarea />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Debit</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Kredit</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <Button>Simpan</Button>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}