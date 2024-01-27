"use client"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../../cash/data/data-table";
import { colums_barang } from "../data/colums_barang";
import { colums_adjusments } from "../data/colums_adjusments";
import { columns_approval } from "../data/colums_approval";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Delete, Pencil, Trash2, X } from "lucide-react";
import { DrawerDialog } from "@/components/Dialog";
import { SheetComponent } from "@/components/SheetComponent";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import SelectOption from "@/components/SelectOption";
import { ComboBox } from "@/components/ComboBox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ActionBar from "./ActionBar";
import AnalyticBoxProduct from "./AnalyticBoxProduct";
import { data_adjusments, data_product } from "../data/dummy";
import { RowSelectionRow, RowSelectionState } from "@tanstack/react-table";


export const analytics_barang: Array<{ title: string, count: number, total: string, color: string }> = [
    {
        title: "Stok tersedia",
        count: 0,
        total: "0",
        color: "#c7e6c7"
    },
    {
        title: "Stok segera habis",
        count: 0,
        total: "0",
        color: "#cef1fd"
    },
    {
        title: "Stok habis",
        count: 0,
        total: "0",
        color: "#f8c9c4"
    },
    {
        title: "Gudang",
        count: 0,
        total: "0",
        color: "#eaebfb"
    }
]


export default function BarangJasa() {
    const [open_group, setOpenGroup] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const [open_filter, setOpenFilter] = useState<boolean>(false);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    useEffect(() => {
        console.log(Object.keys(rowSelection).length);
    }, [rowSelection]);

    return (
        <>
            <div className="flex flex-col gap-5">
                <AnalyticBoxProduct />
                <ActionBar setOpenFilter={setOpenFilter} setOpenGroup={setOpenGroup} />
                <Tabs defaultValue="list_product" className="w-full">
                    <TabsList>
                        <TabsTrigger value="list_product">List produk</TabsTrigger>
                        <TabsTrigger value="list_penyesuaian_stok">List penyesuaian stok</TabsTrigger>
                    </TabsList>
                    <TabsContent value="list_product">
                        <div className="flex flex-col gap-4">

                            <Card className="shadow-none">
                                <CardContent className="py-6">
                                    <div className="relative">
                                        <div className="absolute top-[-10px]">
                                            {
                                                Object.keys(rowSelection).length !== 0 && <Card>
                                                    <CardContent className="p-3">
                                                        <div className="flex gap-3">
                                                            <Label className="self-center text-sm">{Object.keys(rowSelection).length} Produk Terpilih</Label>
                                                            <Button size={"sm"}>Arsipkan</Button>
                                                            <Button size={"sm"} variant="destructive">Hapus</Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            }
                                        </div>
                                        <DataTable data={data_product} columns={colums_barang} setRowSelection={setRowSelection} rowSelection={rowSelection} />
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="list_penyesuaian_stok">
                        <Card className="shadow-none">
                            <CardContent className="py-6">
                                <DataTable data={data_adjusments} columns={colums_adjusments} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

            </div>
            <DrawerDialog title="Atur kategori produk" desc="lorem ipsum dollar amet." open={open_group} setOpen={setOpenGroup} max_width="700px">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="">
                            <Input placeholder="Cari kategori..." />
                        </div>
                        <div className="self-center">
                            <Button size={"sm"} onClick={() => setAdd(true)}>Tambah Kategori</Button>
                        </div>
                    </div>
                    {
                        add === true && <div>
                            <Card>
                                <CardContent className="py-3 px-3">
                                    <div className="flex justify-between gap-3">
                                        <div className="flex-1">
                                            <Input placeholder="Masukan judul kategori..." />
                                        </div>
                                        <div className="flex gap-3 self-center">
                                            <Button size={"sm"} onClick={() => setAdd(false)}><Check size={16} /></Button>
                                            <Button variant={"outline"} size={"sm"} onClick={() => setAdd(false)}><X size={16} /></Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    }
                    <div>
                        <Table>
                            <TableHeader className="bg-primary">
                                <TableRow>
                                    <TableHead className="text-white">Nama Kategori</TableHead>
                                    <TableHead className="text-white">Jumlah</TableHead>
                                    <TableHead className="text-white"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <div>
                                                <span>Peternakan</span>
                                            </div>
                                            <div className="self-center">
                                                <Pencil size={16} className="text-muted-foreground cursor-pointer" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <Trash2 size={18} className="text-muted-foreground cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex justify-end">
                        <div>
                            <Button variant={"outline"} onClick={() => setOpenGroup(false)}>Selesai</Button>
                        </div>
                    </div>
                </div>
            </DrawerDialog>
            <SheetComponent open={open_filter} setOpen={setOpenFilter} title="Filter list produk" desc="">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label>Kata kunci</Label>
                        <Input />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Tipe Produk</Label>
                        <SelectOption select={[
                            {
                                label: "Single",
                                value: "single"
                            },
                            {
                                label: "Bundle",
                                value: "bundle"
                            },
                            {
                                label: "Track",
                                value: "track"
                            },
                            {
                                label: "Non-Track",
                                value: "non-track"
                            }
                        ]} placeholder="Pilih tipe produk" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Kategori Produk</Label>
                        <ComboBox select={[]} placeholder="Pilih kategori produk" name="kategori produk" search="Cari kategori produk..." />
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroup defaultValue="mencakup_semua">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="mencakup_semua" id="r1" />
                                <Label htmlFor="r1">Mencakup semua</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="salah_satu" id="r2" />
                                <Label htmlFor="r2">Salah satu</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex items-center space-x-2 mt-5">
                        <Switch id="all" />
                        <Label htmlFor="all">Tampilkan produk yang diarsipkan</Label>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="flex-1">
                            <Button variant={"link"}>Atur ulang</Button>
                        </div>
                        <div className="flex gap-3">
                            <Button variant={"outline"} onClick={() => setOpenFilter(false)}>Batal</Button>
                            <Button>Terapkan</Button>
                        </div>
                    </div>
                </div>
            </SheetComponent>
        </>
    )
}