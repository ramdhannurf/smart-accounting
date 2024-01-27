"use client"
import InnerContent from "@/components/InnerContent";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BookText, Info, Landmark, Layout, UserSquare } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ComboBox } from "@/components/ComboBox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Title from "@/components/Title";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react";


export default function AddContactPage() {
    const [open, setOpen] = useState<boolean>(false);
    const [show_penagihan, setShowPenagihan] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Buat Kontak" subtitle="Kontak"></Title>
                    <Card>
                        <CardContent className="py-3">
                            <Accordion type="multiple" >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-md">
                                        <div className="flex gap-3">
                                            <div>
                                                <UserSquare className="text-primary" />
                                            </div>
                                            <p className="self-center">Info kontak</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-1">
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-2">
                                                <Label>Nama Tampilan <span className="text-destructive">*</span></Label>
                                                <Input type="text" />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Label>
                                                    <div className="flex gap-2">
                                                        <div>
                                                            Tipe kontak <span className="text-destructive">*</span>
                                                        </div>
                                                        <div>
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <Info size={16} />
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p>Anda dapat memilih tipe kontak lebih dari satu.</p>
                                                                </TooltipContent>
                                                            </Tooltip>

                                                        </div>
                                                    </div>
                                                </Label>
                                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="pelanggan" />
                                                        <label
                                                            htmlFor="pelanggan"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            Pelanggan
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="supplier" />
                                                        <label
                                                            htmlFor="supplier"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            Supplier
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="karyawan" />
                                                        <label
                                                            htmlFor="karyawan"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            Karyawan
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="lainnya" />
                                                        <label
                                                            htmlFor="lainnya"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            Lainnya
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* <ToggleGroup type="multiple" className="justify-start 2xl:flex-nowrap xl:flex-nowrap flex-wrap" variant={'outline'}>
                                                    <ToggleGroupItem value="Pelanggan" className="data-[state=on]:bg-primary data-[state=on]:text-white">Pelanggan</ToggleGroupItem>
                                                    <ToggleGroupItem value="Supplier" className="data-[state=on]:bg-primary data-[state=on]:text-white">Supplier</ToggleGroupItem>
                                                    <ToggleGroupItem value="Karyawan" className="data-[state=on]:bg-primary data-[state=on]:text-white">Karyawan</ToggleGroupItem>
                                                    <ToggleGroupItem value="Lainnya" className="data-[state=on]:bg-primary data-[state=on]:text-white">Lainnya</ToggleGroupItem>
                                                </ToggleGroup> */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Grup Kontak</Label>
                                                <ComboBox select={[]} placeholder="Pilih grup kontak..." search="Cari grup kontak..." name="grup" />
                                            </div>

                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-md">
                                        <div className="flex gap-3">
                                            <div>
                                                <BookText className="text-primary" />
                                            </div>
                                            <p className="self-center">Info umum</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-1">
                                        <div className="flex flex-col gap-5 mt-1">
                                            <div className="flex flex-col gap-2">
                                                <Label>Nama lengkap</Label>
                                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                                    <div className="w-full">
                                                        <Select>
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder="Panggilan" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Bapak">Bapak</SelectItem>
                                                                <SelectItem value="Nona">Nona</SelectItem>
                                                                <SelectItem value="Ibu">Ibu</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 w-full">
                                                        <Input placeholder="Nama awal" />
                                                        <Input placeholder="Nama tengah" />
                                                        <Input placeholder="Nama akhir" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                                    <div className="flex flex-col gap-2 w-full">
                                                        <Label>Identitas</Label>
                                                        <Select>
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder="Pilih" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="KTP">KTP</SelectItem>
                                                                <SelectItem value="Passport">Passport</SelectItem>
                                                                <SelectItem value="SIM">SIM</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="flex flex-col flex-1 gap-2 w-full">
                                                        <Label>Nomor identitas</Label>
                                                        <Input />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Email</Label>
                                                    <Input />
                                                </div>
                                                <small className="text-muted-foreground">Anda dapat memilih lebih dari 1 email</small>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Nama Perusahaan</Label>
                                                <Input />
                                            </div>
                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Nomor handphone</Label>
                                                    <Input />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Nomor telepon</Label>
                                                    <Input />
                                                </div>
                                            </div>
                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Fax</Label>
                                                    <Input />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>NPWP</Label>
                                                    <Input />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Alamat penagihan</Label>
                                                <Textarea placeholder="Contoh: Jalan Indonesia Block C No.12" />
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="alamat-penagih" checked={open} onCheckedChange={setOpen} />
                                                    <Label htmlFor="alamat-penagih">Tambah rincian</Label>
                                                </div>
                                                <Collapsible open={open} onOpenChange={setOpen} className="pt-3 pb-5">
                                                    <CollapsibleContent>
                                                        <div className="flex flex-col gap-5">
                                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                                                                <Input placeholder="No." />
                                                                <Input placeholder="RT" />
                                                                <Input placeholder="RW" />
                                                                <Input placeholder="Kode pos" />
                                                            </div>
                                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                                                <Input placeholder="Kelurahan" />
                                                                <Input placeholder="Kecamatan" />
                                                            </div>
                                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                                                                <Input placeholder="Kabupaten/Kota" />
                                                                <Input placeholder="Provinsi" />
                                                            </div>
                                                        </div>
                                                    </CollapsibleContent>
                                                </Collapsible>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Alamat penagihan</Label>
                                                <Textarea placeholder="Contoh: Jalan Indonesia Block C No.12" style={{ display: show_penagihan ? "none" : "block" }} />
                                                <div className="flex items-center space-x-2">
                                                    <Switch id="alamat-penagih" checked={show_penagihan} onCheckedChange={setShowPenagihan} />
                                                    <Label htmlFor="alamat-penagih">Sama dengan Alamat penagihan</Label>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Info Lainnya</Label>
                                                <Input />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-md">
                                        <div className="flex gap-3">
                                            <div>
                                                <Landmark className="text-primary" />
                                            </div>
                                            <p className="self-center">Info bank</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-1">
                                        <div className="flex flex-col gap-3 mt-3">
                                            <div className="text-end">
                                                <Button>Tambah Akun Bank</Button>
                                            </div>
                                            <div className="overflow-y-auto">
                                                <Table>
                                                    <TableHeader className="bg-primary">
                                                        <TableRow>
                                                            <TableHead className="text-white">Nama bank</TableHead>
                                                            <TableHead className="text-white">Cabang bank</TableHead>
                                                            <TableHead className="text-white">Pemegang akun bank</TableHead>
                                                            <TableHead className="text-white">Nomor rekening</TableHead>
                                                            <TableHead className="text-white"></TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>BCA</TableCell>
                                                            <TableCell>BCA KCP</TableCell>
                                                            <TableCell>Aye Shabira</TableCell>
                                                            <TableCell>123325654</TableCell>
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
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-md">
                                        <div className="flex gap-3">
                                            <div>
                                                <Layout className="text-primary" />
                                            </div>
                                            <p className="self-center">Pemetaan akun</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-1">
                                        <div className="flex flex-col gap-5 mt-1">
                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Akun piutang</Label>
                                                    <ComboBox select={[]} placeholder="Pilih akun piutang" search="Cari akun piutang" name="akun piutang" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Akun hutang</Label>
                                                    <ComboBox select={[]} placeholder="Pilih akun hutang" search="Cari akun hutang" name="akun hutang" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label>Akun hutang</Label>
                                                <ComboBox select={[]} placeholder="Pilih Syarat pembayaran utama" search="Cari Syarat pembayaran utama" name="Syarat pembayaran utama" />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="flex gap-3 justify-end mt-5">
                                <Link href={"/dashboard/contact"}>
                                    <Button variant={"outline"}>Kembali</Button>
                                </Link>
                                <Button>Simpan</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}