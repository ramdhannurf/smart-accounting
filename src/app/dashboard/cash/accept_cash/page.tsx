"use client"
import { ComboBox } from "@/components/ComboBox";
import { DrawerDialog } from "@/components/Dialog";
import InnerContent from "@/components/InnerContent";
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
import { useState } from "react";

export default function AcceptCashPage() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Transaksi</p>
                                    <h1 className="font-semibold text-2xl">Terima Uang</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-6">
                            <div className="">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex gap-5">
                                        <Card className="w-full">
                                            <CardContent className="py-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Setor Ke</Label>
                                                    <ComboBox select={[]} placeholder="Pilih akun pembayaran" name="akun pembayaran" search="Cari akun pembayaran..." />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="flex gap-5">
                                        <Card className="w-full">
                                            <CardContent className="py-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label htmlFor="">Total Amount</Label>
                                                    <h3 className="font-bold text-2xl text-primary">Rp. 110.000</h3>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="pt-8 pb-5">
                                    <CardTitle className="pb-3">Pembayaran</CardTitle>
                                    <Separator />
                                </div>
                                <div className="grid grid-cols-3 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="">Yang Membayar</Label>
                                        <ComboBox select={[]} placeholder="Pilih akun pembayaran" name="akun pembayaran" search="Cari akun pembayaran..." />
                                    </div>
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
                                        <div className="flex items-center space-x-2">
                                            <Switch id="airplane-mode" />
                                            <Label htmlFor="airplane-mode">Harga termasuk pajak?</Label>
                                        </div>
                                        <Button onClick={() => setOpen(true)}>Tambah Data</Button>
                                    </div>
                                    <Table>
                                        <TableHeader className="bg-primary">
                                            <TableRow>
                                                <TableHead className="text-white">Terima dari</TableHead>
                                                <TableHead className="text-white">Deskripsi</TableHead>
                                                <TableHead className="text-white">Pajak</TableHead>
                                                <TableHead className="text-white">Jumlah</TableHead>
                                                <TableHead className="text-white"></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Alicia Koch</TableCell>
                                                <TableCell>Paid</TableCell>
                                                <TableCell>PPN</TableCell>
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
                                <Separator className="my-5" />
                                <div className="grid grid-cols-2 gap-10">
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
                                                        <p>SubTotal</p>
                                                        <p>Rp. 110.000</p>
                                                    </div>
                                                    <Separator className="my-5" />
                                                    <div className="flex justify-between">
                                                        <p className="text-xl font-semibold">Total</p>
                                                        <p className="text-xl font-semibold">Rp. 110.000</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-end mt-5">
                                    <Link href={"/dashboard/cash"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Buat Penerimaan</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah Transaksi" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Terima dari</Label>
                        <ComboBox select={[]} placeholder="Pilih akun" name="akun" search="Cari akun..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Deskripsi</Label>
                        <Textarea />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Pajak</Label>
                        <ComboBox select={[]} placeholder="Pilih pajak" name="pajak" search="Cari pajak..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Jumlah</Label>
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