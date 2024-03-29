"use client"
import { ComboBox } from "@/components/ComboBox";
import InnerContent from "@/components/InnerContent";
import { DatePicker } from "@/components/date-time";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DrawerDialog } from "@/components/Dialog";
import Link from "next/link";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import AlertConfirm from "@/components/AlertConfirm";
import Title from "@/components/Title";
import { TagsInput } from "react-tag-input-component";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function ExpensesAddPage() {
    const [potongan, setPotongan] = useState<boolean>(false);
    const [type_potongan, setTypePotongan] = useState<"rp" | "percentage">("rp");
    const [open, setOpen] = useState<boolean>(false);
    const [files, setFiles] = useState<any>([]);
    const [selected, setSelected] = useState<Array<string>>([]);

    const [paylater, setPaylater] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Buat Biaya" subtitle="Biaya"></Title>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Informasi Biaya
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5">
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                                    <Card>
                                        <CardContent className="py-4">
                                            <div className="flex gap-5">
                                                <div className="flex flex-col gap-2 w-full">
                                                    <Label>Bayar Dari</Label>
                                                    <ComboBox select={[]} placeholder="Pilih kas" search="Cari kas..." name="kas" disabled={paylater} />
                                                </div>
                                                <div className="flex items-center space-x-2 w-full ">
                                                    <Switch id="bayar-nanti" checked={paylater} onCheckedChange={setPaylater} />
                                                    <Label htmlFor="bayar-nanti">Bayar Nanti</Label>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <div className="text-end self-center">
                                        <h1 className="font-bold text-2xl">Total: <span className="text-primary">Rp. 00,0</span></h1>
                                    </div>
                                </div>
                                <Separator />

                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal Transaksi</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Cara Pembayaran</Label>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih cara pembayaran" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {
                                            paylater === true && <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Tanggal Jatuh Tempo</Label>
                                                    <DatePicker />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Syarat Pembayaran</Label>
                                                    <Select>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Pilih syarat pembayaran" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="net_30">Net 30</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Penerima</Label>
                                            <ComboBox select={[]} placeholder="Pilih kotak" search="Cari kotak..." name="kotak" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Alamat Penagihan</Label>
                                            <Textarea />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Nomor Biaya</Label>
                                            <Input />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tag</Label>
                                            <TagsInput
                                                value={selected}
                                                onChange={setSelected}
                                                placeHolder="enter tag"
                                                classNames={{
                                                    input: "!text-sm focus:outline-primary",
                                                    tag: "!text-sm"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-end gap-4">
                                        <div className="flex  items-center space-x-2">
                                            <Switch id="airplane-mode" />
                                            <Label htmlFor="airplane-mode">Harga termasuk pajak?</Label>
                                        </div>
                                        <Button onClick={() => setOpen(true)}>Tambah Data</Button>
                                    </div>
                                    <div className="overflow-y-auto">
                                        <Table>
                                            <TableHeader className="bg-primary">
                                                <TableRow>
                                                    <TableHead className="text-white">Akun Biaya</TableHead>
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
                                </div>
                                <Separator />
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-20 mt-6">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Memo</Label>
                                            <Textarea />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Lampiran</Label>
                                            <FilePond allowMultiple={false} files={files} onupdatefiles={setFiles} maxFiles={5} fileSizeBase={10000} acceptedFileTypes={['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'image/jpeg', 'image/png', 'application/zip']} />
                                            <small>File dapat berupa Excel, Word, PDF, JPG, PNG, atau ZIP (maksimum 5 file dan 10 MB per file).</small>
                                        </div>
                                    </div>
                                    <Card className="mt-6">
                                        <CardContent className="py-4">
                                            <div className="flex flex-col gap-5 w-full">
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex justify-between">
                                                        <h3 className="font-bold text-md">Subtotal</h3>
                                                        <h3 className="font-bold text-md">Rp. 0,00</h3>
                                                    </div>
                                                </div>
                                                <Separator className="my-1" />
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex justify-between">
                                                        <h3 className="font-bold text-md">Total</h3>
                                                        <h3 className="font-bold text-md">Rp. 0,00</h3>
                                                    </div>
                                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3 justify-between">
                                                        <p className="self-center">Potongan ({type_potongan === "rp" ? "Rp." : "%"})</p>
                                                        {
                                                            potongan ? <div className="flex flex-col gap-3">
                                                                <div className="flex w-full max-w-sm items-center space-x-2">
                                                                    <X className="cursor-pointer text-muted-foreground hover:text-primary transition-all duration-500" onClick={() => setPotongan(false)} />
                                                                    <Input type="email" placeholder={type_potongan === "rp" ? "Rp. 00,0" : "0%"} />
                                                                    <Button type="submit" variant={type_potongan === "rp" ? 'default' : 'outline'} size={'sm'} onClick={() => setTypePotongan('rp')}>Rp.</Button>
                                                                    <Button type="submit" variant={type_potongan === "percentage" ? 'default' : 'outline'} size={'sm'} onClick={() => setTypePotongan('percentage')}>%</Button>
                                                                </div>
                                                                <div>
                                                                    <ComboBox select={[]} placeholder="Pilih akun" name="akun" search="Cari akun..." />
                                                                </div>
                                                            </div> : <p className="text-primary hover:underline cursor-pointer text-sm" onClick={() => setPotongan(true)}>+ Masukan Jumlah Potongan</p>
                                                        }
                                                    </div>
                                                </div>
                                                <Separator className="my-1" />
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl font-bold">Total</h3>
                                                    <h3 className="text-xl font-bold">Rp. 0,00</h3>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Link href={"/dashboard/expenses"}>
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Buat</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah Biaya" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Akun Biaya</Label>
                        <ComboBox select={[]} placeholder="Pilih akun biaya" name="akun biaya" search="Cari akun biaya..." />
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