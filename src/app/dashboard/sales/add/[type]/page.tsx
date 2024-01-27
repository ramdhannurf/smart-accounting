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
import { useEffect, useState } from "react";
import { DrawerDialog } from "@/components/Dialog";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";
import { TagsInput } from "react-tag-input-component";
import FileUpload from "@/components/FileUpload";

export default function AddSales({ params }: { params: { type: string } }) {
    const [open, setOpen] = useState<boolean>(false);
    const [potongan, setPotongan] = useState<boolean>(false);
    const [type_potongan, setTypePotongan] = useState<"rp" | "percentage">("rp");
    const router = useRouter();
    const [title, setTitle] = useState<string>("");

    const [selected, setSelected] = useState<Array<string>>([]);
    const [files, setFiles] = useState<Array<File>>([]);

    useEffect(() => {
        if (params.type === "sales_billing") {
            setTitle("Penagihan Penjualan");
        } else if (params.type === "sales_orders") {
            setTitle("Pemesanan Penjualan");
        } else if (params.type === "sales_offer") {
            setTitle("Penawaran Penjualan");
        } else {
            router.push("/404");
        }
    }, [params.type]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title={`Buat ${title}`} subtitle="Penjualan"></Title>
                    <Card>
                        <CardContent className="py-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-5 justify-between">
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                                        <div className="flex flex-col gap-2">
                                            <Label>Pelanggan <span className="text-destructive-foreground">*</span></Label>
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
                                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
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
                                            <Label>{params.type === "sales_billing" ? "Tanggal Jatuh Tempo" : "Berlaku hingga"}</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Syarat Pembayaran</Label>
                                            <ComboBox select={[]} placeholder="Pilih syarat pembayaran" search="Cari syarat pembayaran" name="syarat pembayaran" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <Label>Nomor Transaksi</Label>
                                            <Input />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>No referensi pelanggan</Label>
                                            <Input />
                                        </div>
                                        {
                                            params.type !== "sales_billing" && <div className="flex flex-col gap-2">
                                                <Label>Gudang</Label>
                                                <ComboBox select={[]} placeholder="Pilih Gudang" search="Cari Gudang" name="Gudang" />
                                            </div>
                                        }

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
                                <div className="flex flex-col gap-3">
                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-end gap-4">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="airplane-mode" />
                                            <Label htmlFor="airplane-mode">Harga termasuk pajak?</Label>
                                        </div>
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
                                                    <TableHead className="text-white">Harga satuan</TableHead>
                                                    <TableHead className="text-white">Diskon</TableHead>
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
                                                    <TableCell>Rp. 100.000</TableCell>
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
                                            <FileUpload files={files} setFiles={setFiles} multiple={true} />
                                            <small className="text-xs">File dapat berupa Excel, Word, PDF, JPG, PNG, atau ZIP (maksimum 5 file dan 10 MB per file).</small>
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
                                                    <div className="flex justify-between">
                                                        <p>Diskon per baris</p>
                                                        <p>Rp. 0,00</p>
                                                    </div>
                                                    <div>

                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p>PPN</p>
                                                        <p>Rp. 0,00</p>
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
                                                    <h3 className="text-xl font-bold">Sisa Tagihan</h3>
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
            <DrawerDialog title="Tambah Transaksi" desc="lorem ipsum follar amets." open={open} setOpen={setOpen}>
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
                        <Input placeholder="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Unit</Label>
                        <ComboBox select={[]} placeholder="Pilih unit" name="unit" search="Cari unit..." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Harga Satuan</Label>
                        <Input placeholder="Rp. 00,0" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Diskon</Label>
                        <Input placeholder="%" />
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