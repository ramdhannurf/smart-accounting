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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Title from "@/components/Title";
import FileUpload from "@/components/FileUpload";

export default function PurchaseRequest() {
    const [open, setOpen] = useState<boolean>(false);
    const [potongan, setPotongan] = useState<boolean>(false);
    const [type_potongan, setTypePotongan] = useState<"rp" | "percentage">("rp");
    const [files, setFiles] = useState<Array<File>>([]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Buat Permintaan Pembelian" subtitle="Penjualan"></Title>
                    <Card>
                        <CardContent className="py-5">
                            <div className="flex flex-col gap-5">
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1">
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                                        <div className="flex flex-col gap-2">
                                            <Label>Staf penyetuju <span className="text-destructive-foreground">*</span></Label>
                                            <ComboBox select={[]} placeholder="Pilih staf" search="Cari staf..." name="staf" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Email penyetuju <span className="text-destructive-foreground">*</span></Label>
                                            <ComboBox select={[]} placeholder="Pilih email staf" search="Cari email staf..." name="email staf" />
                                        </div>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Nama Supplier</Label>
                                            <ComboBox select={[]} placeholder="Pilih Supplier" search="Cari Supplier..." name="Supplier" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Email Supplier</Label>
                                            <ComboBox select={[]} placeholder="Pilih Email Supplier" search="Cari Email Supplier..." name="Email Supplier" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal Transaksi <span className="text-destructive-foreground">*</span></Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Nomor Transaksi</Label>
                                            <Input />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Alamat Suplieur</Label>
                                            <Textarea />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal Jatuh Tempo <span className="text-destructive-foreground">*</span></Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tahun Anggaran Terkait</Label>
                                            <Input />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Urgensi <span className="text-destructive-foreground">*</span></Label>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Urgensi" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="Tinggi">Tinggi</SelectItem>
                                                        <SelectItem value="Sedang">Sedang</SelectItem>
                                                        <SelectItem value="Rendah">Rendah</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tag</Label>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Tag" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="Tinggi">Tinggi</SelectItem>
                                                        <SelectItem value="Sedang">Sedang</SelectItem>
                                                        <SelectItem value="Rendah">Rendah</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
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
                                                    <TableHead className="text-white">Produk</TableHead>
                                                    <TableHead className="text-white">Deskripsi</TableHead>
                                                    <TableHead className="text-white">Kuantitas</TableHead>
                                                    <TableHead className="text-white">Unit</TableHead>
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
                                            <FileUpload files={files} setFiles={setFiles} multiple={true} />
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
                                    <Link href={"/dashboard/purchase"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Buat</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent >
            <DrawerDialog title="Tambah Produk" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Produk</Label>
                        <ComboBox select={[]} placeholder="Pilih produk" name="produk" search="Cari produk..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Deskripsi</Label>
                        <Textarea />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Kuantitas</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Unit</Label>
                        <ComboBox select={[]} placeholder="Pilih unit" name="unit" search="Cari unit..." />
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