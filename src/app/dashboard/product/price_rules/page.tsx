"use client"
import InnerContent from "@/components/InnerContent";
import { DatePicker } from "@/components/date-time";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import AddKontak from "./AddKontak";
import AddProductModal from "./AddProductModal";
import Link from "next/link";
import Title from "@/components/Title";


export default function PriceRules() {
    const [diskon, setDiskon] = useState<string>("");
    const [open_kontak, setOpenKontak] = useState<boolean>(false);
    const [open_product, setOpenProduct] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Buat Aturan Harga" subtitle="Produk / Aturan Harga"></Title>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>1. Buat Aturan</CardTitle>
                            <CardDescription>
                                Atur price rule produk tertentu untuk kontak-kontak pilihan anda, sesuaikan periode yang Anda inginkan. Silahkan isi kolom-kolom di bawah ini.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                                <div className="flex flex-col gap-2">
                                    <Label>Nama aturan</Label>
                                    <Input />
                                </div>
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal mulai</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Jenis aturan</Label>
                                            <Select onValueChange={setDiskon}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Jenis aturan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Diskon persentase">Diskon persentase</SelectItem>
                                                    <SelectItem value="Diskon nilai">Diskon nilai</SelectItem>
                                                    <SelectItem value="Diskon per tingkatan">Diskon per tingkatan</SelectItem>
                                                    <SelectItem value="Diskon subtotal penjualan">Diskon subtotal penjualan</SelectItem>
                                                    <SelectItem value="Diskon harga akhir">Diskon harga akhir</SelectItem>
                                                    <SelectItem value="Markup persentase">Markup persentase</SelectItem>
                                                    <SelectItem value="Markup nilai">Markup nilai</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal berakhir</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="">{diskon}</Label>
                                            <div className="relative">
                                                <Input type="number" />
                                                <div className="absolute top-0 right-0 bg-[#1257b6] text-white rounded-r-md p-[0.50rem] px-3 text-sm">
                                                    <span>%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-between pr-6">
                            <CardHeader>
                                <CardTitle>2. Pilih Kontak</CardTitle>
                                <CardDescription>Tentukan siapa saja yang akan mendapatkan aturan harga sesuai priode.</CardDescription>
                            </CardHeader>
                            <div className="self-center">
                                <Button onClick={() => setOpenKontak(true)}>
                                    <Plus className="mr-2" size={18} />
                                    Tambah Kontak
                                </Button>
                            </div>
                        </div>
                        <CardContent>
                            <div className="overflow-y-auto">
                                <Table>
                                    <TableHeader className="bg-primary">
                                        <TableRow>
                                            <TableHead className="text-white">Nama/Grup Kontak</TableHead>
                                            <TableHead className="text-white">Jumlah Kontak</TableHead>
                                            <TableHead className="text-white"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Alicia Koch</TableCell>
                                            <TableCell>10</TableCell>
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
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-between pr-6">
                            <CardHeader>
                                <CardTitle>3. Pilih Produk</CardTitle>
                                <CardDescription>Tentukan produk atau jasa apa saja yang akan terkena potongan aturan harga.</CardDescription>
                            </CardHeader>
                            <div className="self-center">
                                <Button onClick={() => setOpenProduct(true)}>
                                    <Plus className="mr-2" size={18} />
                                    Tambah Produk/Jasa
                                </Button>
                            </div>
                        </div>
                        <CardContent>
                            <div className="overflow-y-auto">
                                <Table>
                                    <TableHeader className="bg-primary">
                                        <TableRow>
                                            <TableHead className="text-white">Nama Produk</TableHead>
                                            <TableHead className="text-white">Kode Produk</TableHead>
                                            <TableHead className="text-white">Unit</TableHead>
                                            <TableHead className="text-white">Harga Beli</TableHead>
                                            <TableHead className="text-white">Harga Jual</TableHead>
                                            <TableHead className="text-white">Harga Akhir</TableHead>
                                            <TableHead className="text-white"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Telur</TableCell>
                                            <TableCell>TELUR-001</TableCell>
                                            <TableCell>Buah</TableCell>
                                            <TableCell>Rp. 3.000</TableCell>
                                            <TableCell>Rp. 5.000</TableCell>
                                            <TableCell>Rp. 3.500</TableCell>
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
                                                        <DropdownMenuItem>Hapus</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-6">
                            <div className="flex justify-end">
                                <div className="flex gap-2">
                                    <Link href={"/dashboard/product"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Simpan</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <AddKontak open={open_kontak} setOpen={setOpenKontak} />
            <AddProductModal open={open_product} setOpen={setOpenProduct} />
        </>
    )
}