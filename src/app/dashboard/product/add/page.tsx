"use client"
import InnerContent from "@/components/InnerContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComboBox } from "@/components/ComboBox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "@/components/Title";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function AddProduct() {
    const [files, setFiles] = useState<any>([]);
    const [buy_this, setBuyThis] = useState<boolean>(true);
    const [sale_this, setSaleThis] = useState<boolean>(true);

    const [type_product, setTypeProduct] = useState<string>("single");

    useEffect(() => {
        if (type_product === "bundle") {
            setBuyThis(false);
        } else {
            setBuyThis(true);
        }
    }, [type_product])

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Tambah produk baru" subtitle="Produk"></Title>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>Informasi Produk</CardTitle>
                        </CardHeader>
                        <CardContent>

                            <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap-reverse gap-10">
                                <div className="flex flex-col gap-5 w-full max-w-[500px]">
                                    <div className="flex flex-col gap-2">
                                        <Label>Nama produk <small className="text-destructive">*</small></Label>
                                        <Input />
                                    </div>
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Kode produk / SKU</Label>
                                            <Input />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Barcode</Label>
                                            <Input />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Unit</Label>
                                        <ComboBox select={[]} placeholder="Pilih unit" search="Cari unit..." name="unit" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Kategori produk</Label>
                                        <ComboBox select={[]} placeholder="Pilih kategori produk" search="Cari kategori produk..." name="kategori produk" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Deskripsi</Label>
                                        <Textarea />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <Label>Tipe produk</Label>
                                        <RadioGroup defaultValue={type_product} onValueChange={setTypeProduct}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="single" id="r1" />
                                                <Label htmlFor="r1">Single</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="bundle" id="r2" />
                                                <Label htmlFor="r2">Bundle</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="max-w-[300px] w-full">
                                    <FilePond allowMultiple={false} files={files} onupdatefiles={setFiles} />
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>Harga Produk</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="harga_persediaan">
                                <TabsList>
                                    <TabsTrigger value="harga_persediaan">Harga & Persediaan</TabsTrigger>
                                    <TabsTrigger value="pengaturan_bundle" disabled={type_product === "single" ? true : false}>Pengaturan Bundle</TabsTrigger>
                                </TabsList>
                                <TabsContent value="harga_persediaan">
                                    <div>
                                        <div className="flex flex-col gap-5 mt-10">
                                            <div className="flex items-center space-x-2">
                                                <Switch id="membeli_1" onCheckedChange={setBuyThis} checked={buy_this} />
                                                <Label htmlFor="membeli_1">Saya beli produk ini</Label>
                                            </div>
                                            {
                                                buy_this === true && <Card className="shadow-none 2xl:w-1/2 xl:w-1/2 w-full">
                                                    <CardHeader>
                                                        <CardTitle>Informasi Pembelian</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex flex-col gap-5">
                                                            <div className="flex flex-col gap-2">
                                                                <Label htmlFor="">Harga beli satuan</Label>
                                                                <div className="relative">
                                                                    <Input placeholder="0,00" className="pl-14" />
                                                                    <div className="absolute top-0 bg-[#1257b6] text-white rounded-l-md p-[0.50rem] px-3 text-sm">
                                                                        <span>Rp.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <Label>Akun pembelian</Label>
                                                                <ComboBox select={[]} search="Cari akun pembelian..." placeholder="Pilih akun pembelian" name="akun pembelian" />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <Label>Pajak beli</Label>
                                                                <ComboBox select={[]} search="Cari pajak beli..." placeholder="Pilih pajak beli" name="pajak beli" />
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            }
                                            <Separator />
                                            <div className="flex items-center space-x-2">
                                                <Switch id="jual_1" onCheckedChange={setSaleThis} checked={sale_this} />
                                                <Label htmlFor="jual_1">Saya jual produk ini</Label>
                                            </div>
                                            {
                                                sale_this === true && <Card className="shadow-none 2xl:w-1/2 xl:w-1/2 w-full">
                                                    <CardHeader>
                                                        <CardTitle>Informasi Penjualan</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex flex-col gap-5">
                                                            <div className="flex flex-col gap-2">
                                                                <Label htmlFor="">Harga jual satuan</Label>
                                                                <div className="relative">
                                                                    <Input placeholder="0,00" className="pl-14" />
                                                                    <div className="absolute top-0 bg-[#1257b6] text-white rounded-l-md p-[0.50rem] px-3 text-sm">
                                                                        <span>Rp.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <Label>Akun penjualan</Label>
                                                                <ComboBox select={[]} search="Cari akun penjualan..." placeholder="Pilih akun penjualan" name="akun penjualan" />
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <Label>Pajak jual</Label>
                                                                <ComboBox select={[]} search="Cari pajak jual..." placeholder="Pilih pajak jual" name="pajak jual" />
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            }
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="pengaturan_bundle">
                                    <div className="flex flex-col gap-3 mt-5">
                                        <div className="flex justify-end">
                                            <Button>Tambah Produk</Button>
                                        </div>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-white bg-primary">Nama produk</TableHead>
                                                    <TableHead className="text-white bg-primary">Qty</TableHead>
                                                    <TableHead className="text-white bg-primary">Harga</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium">
                                                        Tahu
                                                    </TableCell>
                                                    <TableCell>20</TableCell>
                                                    <TableCell>10</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-4">
                            <div className="flex justify-end">
                                <div className="flex gap-3">
                                    <Link href={"/dashboard/product"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Popover>
                                        <PopoverTrigger><Button>Buat Produk</Button></PopoverTrigger>
                                        <PopoverContent className="p-2">
                                            <div className="flex flex-col">
                                                <Button variant={"ghost"}>Buat Produk</Button>
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
        </>
    )
}