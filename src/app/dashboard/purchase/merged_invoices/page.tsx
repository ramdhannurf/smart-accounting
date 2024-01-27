"use client"
import { ComboBox } from "@/components/ComboBox";
import InnerContent from "@/components/InnerContent";
import { DatePicker } from "@/components/date-time";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { DrawerDialog } from "@/components/Dialog";
import { X } from "lucide-react";
import Link from "next/link";
import Title from "@/components/Title";
import FileUpload from "@/components/FileUpload";

export default function MergedInvoicesPurchase() {
    const [open, setOpen] = useState<boolean>(false);
    const [potongan, setPotongan] = useState<boolean>(false);
    const [type_potongan, setTypePotongan] = useState<"rp" | "percentage">("rp");
    const [files, setFiles] = useState<Array<File>>([]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Tukar Faktur Pembelian" subtitle="Pembelian"></Title>
                    <Card>
                        <CardContent className="py-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-5 justify-between">
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                                        <div className="flex flex-col gap-2">
                                            <Label>Supplier <span className="text-destructive-foreground">*</span></Label>
                                            <ComboBox select={[]} placeholder="Pilih kontak" search="Cari kontak..." name="kontak" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Email</Label>
                                            <Input />
                                        </div>
                                    </div>
                                    <div className="self-center">
                                        <h1 className="font-bold text-2xl">Total: Rp. 00,0</h1>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <Label>Alamat penagih</Label>
                                        <Textarea />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal Transaksi</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal Jatuh Tempo</Label>
                                            <DatePicker />
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Nomor Transaksi</Label>
                                            <Input />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Syarat Pembayaran</Label>
                                            <ComboBox select={[]} placeholder="Pilih syarat pembayaran" search="Cari syarat pembayaran" name="syarat pembayaran" />
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-end gap-4">
                                        <Button onClick={() => setOpen(true)}>Tambah Data</Button>
                                    </div>
                                    <div className="overflow-y-auto">
                                        <Table>
                                            <TableHeader className="bg-primary">
                                                <TableRow>
                                                    <TableHead className="text-white">Penagihan Penjualan</TableHead>
                                                    <TableHead className="text-white">Deskripsi</TableHead>
                                                    <TableHead className="text-white">Tgl. jatuh tempo</TableHead>
                                                    <TableHead className="text-white">Status</TableHead>
                                                    <TableHead className="text-white">Jumlah tagihan</TableHead>
                                                    <TableHead className="text-white">Sisa tagihan</TableHead>
                                                    <TableHead className="text-white"></TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Alicia Koch</TableCell>
                                                    <TableCell>Paid</TableCell>
                                                    <TableCell>PPN</TableCell>
                                                    <TableCell>Rp. 100.000</TableCell>
                                                    <TableCell>Rp. 100.000</TableCell>
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
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 mt-6">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Pesan</Label>
                                            <Textarea />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Memo</Label>
                                            <Textarea />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Lampiran</Label>
                                            <FileUpload files={files} setFiles={setFiles} multiple={true} maxFiles={10} />
                                            <small>File dapat berupa Excel, Word, PDF, JPG, PNG, atau ZIP (maksimum 5 file dan 10 MB per file).</small>
                                        </div>
                                    </div>
                                    <Card className="mt-6 h-fit">
                                        <CardContent className="py-4">
                                            <div className="flex flex-col gap-5 w-full">
                                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3 justify-between">
                                                    <h3 className="text-xl font-bold">Total sisa tagihan</h3>
                                                    <h3 className="text-xl font-bold">Rp. 0,00</h3>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Link href={"/dashboard/sales"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Buat</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah Penagihan" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Penagihan Penjualan</Label>
                        <ComboBox select={[]} placeholder="Pilih produk" name="produk" search="Cari produk..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Deskripsi</Label>
                        <Textarea />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Tgl. jatuh tempo</Label>
                        <DatePicker />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Status</Label>
                        <ComboBox select={[]} placeholder="Pilih status" name="status" search="Cari status..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Jumlah tagihan</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Sisa tagihan</Label>
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