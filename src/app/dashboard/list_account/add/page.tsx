"use client"
import { ComboBox } from "@/components/ComboBox";
import { DrawerDialog } from "@/components/Dialog";
import InnerContent from "@/components/InnerContent";
import { DatePicker } from "@/components/date-time";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CheckCircle2, HelpCircle, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const kategori: Array<any> = [
    {
        title: "Akun Piutang",
        value: "kas_bank",
    },
    {
        title: "Aktiva Lancar Lainnya",
        value: "Aktiva_Lancar_Lainnya",
    },
    {
        title: "Kas & Bank",
        value: "Kas_&_Bank",
    },
    {
        title: "Persediaan",
        value: "persediaan",
    },
    {
        title: "Aktiva Tetap",
        value: "Aktiva_Tetap",
    },
    {
        title: "Aktiva Lainnya",
        value: "Aktiva_Lainnya",
    },
    {
        title: "Depresiasi & Amortisasi",
        value: "Depresiasi_&_Amortisasi",
    },
    {
        title: "Akun Hutang",
        value: "Akun_Hutang",
    }
];
const detail: Array<any> = [
    {
        title: "Sub-Akun Dari: ",
        value: "0"
    },
    {
        title: "Akun Header Dari: ",
        value: "1"
    }
];
const pajak: Array<any> = [
    {
        title: "PPN",
        value: "ppn"
    }
];

export default function AddAccount() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Akun</p>
                                    <h1 className="font-semibold text-2xl">Buat Akun Baru</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4 w-1/2">
                                <div className="flex flex-col gap-1">
                                    <Label>Nama</Label>
                                    <Input type="text" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label>Nomor</Label>
                                    <Input type="text" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label>Kategori</Label>
                                    <ComboBox select={kategori} placeholder="Pilih kategori" search="Cari kategori..." name="kategori" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label>Detail</Label>
                                    <ComboBox select={detail} placeholder="Pilih detail" search="Cari detail..." name="detail" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label>Pajak</Label>
                                    <ComboBox select={pajak} placeholder="Pilih Pajak" search="Cari pajak..." name="pajak" />
                                </div>
                                <div className="flex justify-between my-3">
                                    <Label>Saldo Awal</Label>
                                    <p>Rp. 00,0 <span className="text-primary underline text-xs cursor-pointer" onClick={() => setOpen(true)}>Edit</span></p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label>Deskripsi</Label>
                                    <Textarea />
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <Link href="/dashboard/list_account">
                                        <Button variant={"outline"}>Kembali</Button>
                                    </Link>
                                    <Button>Tambah</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog open={open} setOpen={setOpen} title="Edit Saldo Awal" desc="Pilih tanggal konversi">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex gap-2">
                            <Label>Tanggal Konversi</Label>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <HelpCircle size={12} />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Tanggal mulai pencatatan di Jurnal</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <DatePicker />
                    </div>
                    <div>
                        <Alert>
                            <AlertDescription>
                                <h4 className="font-bold">Perlu diketahui</h4>
                                <div className="flex flex-col gap-3 mt-3">
                                    <div className="flex gap-2">
                                        <div>
                                            <CheckCircle2 size={16} className="text-primary relative top-1" />
                                        </div>
                                        <div>
                                            <p className="text-sm">Anda dapat mengubah tanggal konversi selama belum melakukan tutup buku.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>
                                            <CheckCircle2 size={16} className="text-primary relative top-1" />
                                        </div>
                                        <div>
                                            <p className="text-sm">Anda bisa input transaksi sebelum tanggal konversi dengan batasan 300.000 akun transaksi. Transaksi yang diinput tidak akan memengaruhi saldo saat ini.</p>
                                        </div>
                                    </div>
                                </div>
                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button>Lihat Saldo Konversi</Button>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}