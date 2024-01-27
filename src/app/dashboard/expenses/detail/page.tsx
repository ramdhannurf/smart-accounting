"use client"
import InnerContent from "@/components/InnerContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftCircle, Ban, FileCheck, FileText, Forward, Phone, PlusCircle, RefreshCw, ScanText } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import AlertConfirm from "@/components/AlertConfirm";
import { useState } from "react";
import Title from "@/components/Title";

export default function ExpenseDetail() {
    const [open_confirm, setOpenConfirm] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title="Expense #10001" subtitle="Transaksi" href="/dashboard/expenses"></Title>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>Informasi Transaksi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-10">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-5 justify-between">
                                    <div>
                                        <div className="flex gap-10">
                                            <div className="flex flex-col gap-3">
                                                <p className="text-sm text-muted-foreground mb-4">Bayar Dari</p>
                                                <p className="text-sm text-muted-foreground">Penerima</p>
                                                <p className="text-sm text-muted-foreground">Alamat Penagihan</p>
                                                <p className="text-sm text-muted-foreground">Tanggal Transaksi</p>
                                                <p className="text-sm text-muted-foreground">Nomor Transaksi</p>
                                                <p className="text-sm text-muted-foreground">Cara Pembayaran</p>
                                                <p className="text-sm text-muted-foreground">Tags</p>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <p className="text-sm font-medium mb-4">
                                                    <Link className="text-primary hover:underline" href={"/dashboard/cash/detail"}>Cash</Link>
                                                </p>
                                                <p className="text-sm font-medium">Aye Shabira</p>
                                                <p className="text-sm font-medium">Jl. Bandung 203</p>
                                                <p className="text-sm font-medium">10/01/2024</p>
                                                <p className="text-sm font-medium">10001</p>
                                                <p className="text-sm font-medium">Bank Transfer</p>
                                                <p className="text-sm font-medium">-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-green-500 font-bold text-3xl">Lunas</h1>
                                        <h3 className="font-medium text-xl">Total Amount: <span className="text-primary font-bold">Rp. 00,0</span></h3>
                                    </div>
                                </div>
                                <div className="overflow-y-auto">
                                    <Table>
                                        <TableHeader className="bg-primary">
                                            <TableRow>
                                                <TableHead className="text-white">Akun biaya</TableHead>
                                                <TableHead className="text-white">Deskripsi</TableHead>
                                                <TableHead className="text-white">Pajak</TableHead>
                                                <TableHead className="text-white">Jumlah (Dalam IDR)</TableHead>
                                                <TableHead className="text-white"></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <Link className="text-primary hover:underline" href={"/dashboard/list_account/detail"}>
                                                        Cost of Sales
                                                    </Link>
                                                </TableCell>
                                                <TableCell>-</TableCell>
                                                <TableCell>PPN</TableCell>
                                                <TableCell>900.000,00</TableCell>
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
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5 w-full">
                                    <Card className="h-fit shadow-none">
                                        <CardContent className="py-4">
                                            <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-5 justify-evenly">
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"}>
                                                        <FileText />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Buat PDF</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"} onClick={() => setOpenConfirm(true)}>
                                                        <FileCheck />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Periksa</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"} onClick={() => setOpenConfirm(true)}>
                                                        <Forward />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Ajukan</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"} onClick={() => setOpenConfirm(true)}>
                                                        <ScanText />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Revisi</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"} onClick={() => setOpenConfirm(true)}>
                                                        <Ban />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Batalkan</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"}>
                                                        <RefreshCw />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Update</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <Button size={"icon"}>
                                                        <Phone />
                                                    </Button>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Whatsapp</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="shadow-none">
                                        <CardContent className="py-4">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex justify-between">
                                                    <p>SubTotal</p>
                                                    <p>Rp. 900.000</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p>PPN 11.0%</p>
                                                    <p>Rp. 99.000</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p>Total</p>
                                                    <p>Rp. 999.000</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p>Sudah Dibayar</p>
                                                    <p>Rp. 999.000</p>
                                                </div>
                                                <Separator className="my-5" />
                                                <div className="flex justify-between">
                                                    <p className="text-xl font-semibold">Sisa Tagihan</p>
                                                    <p className="text-xl font-semibold">Rp. 00,0</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>

            <AlertConfirm open={open_confirm} handleOpen={setOpenConfirm} title={"Apakah anda yakin?"} desc="Tindakan ini tidak bisa dibatalkan. Tindakan ini akan mengubah data Anda secara permanen." btn_yes="Lanjutkan" execute={() => setOpenConfirm(false)} />
        </>
    )
}