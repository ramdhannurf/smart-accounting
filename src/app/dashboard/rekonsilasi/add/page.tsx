"use client"
import InnerContent from "@/components/InnerContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ComboBox } from "@/components/ComboBox";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { DrawerDialog } from "@/components/Dialog";
import { Textarea } from "@/components/ui/textarea";

export default function AddRekonsilasiPage() {
    const [show_more, setShowMore] = useState<boolean>(false);
    const [show_memo, setShowMemo] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const set_memo = (memos: string) => {
        if (memos === "2") {
            setShowMemo(true);
        } else {
            setShowMemo(false);
        }
    }

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <p className="text-sm text-muted-foreground">Account - Cash & Bank</p>
                                    <h1 className="font-semibold text-2xl">Buat Aturan Pencocokan</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Aturan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-3">
                                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
                                    <div className="flex flex-col gap-1">
                                        <Label>Nama Aturan</Label>
                                        <Input />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Untuk</Label>
                                        <Input />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Akun</Label>
                                        <Input />
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col gap-5">
                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-2">
                                        <p className="self-center">1. Sewaktu transaksi bank menemukan </p>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Pilih keterangan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="semua">Semua</SelectItem>
                                                    <SelectItem value="salah_satu">Salah Satu</SelectItem>

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <p className="self-center">dari kondisi dibawah ini:</p>
                                    </div>
                                    <div>
                                        <div className="text-end mb-5">
                                            <Button onClick={() => setOpen(true)}>Tambah kondisi</Button>
                                        </div>
                                        <div className="overflow-y-auto">
                                            <Table>
                                                <TableHeader className="bg-primary">
                                                    <TableRow>
                                                        <TableHead className="text-white">Deskripsi</TableHead>
                                                        <TableHead className="text-white">Kondisi</TableHead>
                                                        <TableHead className="text-white">Jumlah/Keterangan</TableHead>
                                                        <TableHead className="text-white"></TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Alicia Koch</TableCell>
                                                        <TableCell>Paid</TableCell>
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
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-1/2 w-full">
                                    <p>2. Catat di Jurnal sebagai Deposit Bank:</p>
                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap flex-col gap-2 ml-5">
                                        <Label>Kategori</Label>
                                        <div className="flex  gap-3 w-full">
                                            <div className="w-full">
                                                <ComboBox select={[]} placeholder="Pilih akun" search="Cari akun..." name="akun" />
                                            </div>
                                            <div>
                                                <Button>Pisah</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-5">
                                        <p className="text-primary hover:underline text-sm cursor-pointer" onClick={() => show_more ? setShowMore(false) : setShowMore(true)}>{show_more ? "Tampilkan sedikit..." : "Tampilkan lebih..."}</p>
                                    </div>
                                    {
                                        show_more ? <>
                                            <div className="flex flex-col gap-2 ml-5">
                                                <Label>Kontak</Label>
                                                <ComboBox select={[]} placeholder="Pilih kontak" search="Cari kontak..." name="kontak" />
                                            </div>
                                            <div className="flex flex-col gap-2 ml-5">
                                                <Label>Memo</Label>
                                                <Select onValueChange={set_memo}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Pilih meno" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="0">Berdasarkan Transaksi</SelectItem>
                                                            <SelectItem value="1">Tentukan Nanti</SelectItem>
                                                            <SelectItem value="2">Tentukan Sekarang</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            {
                                                show_memo && <div className="flex flex-col gap-2 ml-5">
                                                    <Input />
                                                </div>
                                            }
                                        </>
                                            :
                                            <></>
                                    }
                                </div>
                                <Separator className="my-3" />
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3 justify-between">
                                    <div className="self-center">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="airplane-mode" />
                                            <Label htmlFor="airplane-mode">Simpan otomatis di Jurnal saya</Label>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Link href={'/dashboard/rekonsilasi'}>
                                            <Button variant={'outline'}>Kembali</Button>
                                        </Link>
                                        <Button>Simpan</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Tambah kondisi" desc="lorem ipsum dollar amet." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Deskripsi</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih deskripsi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Mengandung">Deskripsi</SelectItem>
                                    <SelectItem value="salah_satu">Jumlah</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Kondisi</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih kondisi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Mengandung">Mengandung</SelectItem>
                                    <SelectItem value="salah_satu">Tidak Mengandung</SelectItem>
                                    <SelectItem value="salah_satu">Mulai Dengan</SelectItem>
                                    <SelectItem value="salah_satu">Kosong</SelectItem>
                                    <SelectItem value="salah_satu">Sama Dengan</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="">Jumlah/Keterangan</Label>
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