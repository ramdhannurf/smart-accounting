"use client"
import { ComboBox } from "@/components/ComboBox";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import EditSaldoAwal from "@/components/modal/EditSaldoAwal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

const kategori: Array<any> = [
    {
        title: "Kas & Bank",
        value: "kas_bank",
    },
    {
        title: "Credit Card",
        value: "credit_card",
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
const nama_bank: Array<any> = [
    {
        title: "PT Bank Central Asia",
        value: "bca"
    }
]

export default function AddAccount() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div>
                    <Title title="Buat Akun Baru" subtitle="Akun">

                    </Title>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="">
                                <div className="flex flex-col gap-4 2xl:w-1/2 xl:w-1/2 w-full">
                                    <div>
                                        <Label>Nama</Label>
                                        <Input type="text" />
                                    </div>
                                    <div>
                                        <Label>Nomor</Label>
                                        <Input type="text" />
                                    </div>
                                    <div>
                                        <Label>Kategori</Label>
                                        <ComboBox select={kategori} placeholder="Pilih kategori" search="Cari kategori..." name="kategori" />
                                    </div>
                                    <div>
                                        <Label>Detail</Label>
                                        <ComboBox select={detail} placeholder="Pilih detail" search="Cari detail..." name="detail" />
                                    </div>
                                    <div>
                                        <Label>Pajak</Label>
                                        <ComboBox select={pajak} placeholder="Pilih Pajak" search="Cari pajak..." name="pajak" />
                                    </div>
                                    <div>
                                        <Label>Nama Bank</Label>
                                        <ComboBox select={nama_bank} placeholder="Pilih Nama Bank" search="Cari nama bank..." name="nama bank" />
                                    </div>
                                    <div className="flex justify-between">
                                        <Label className="self-center">Saldo Awal</Label>
                                        <p>Rp. 0,00 <small className="text-xs hover:underline text-primary cursor-pointer" style={{ userSelect: "none" }} onClick={() => setOpen(true)}>Edit</small></p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Deskripsi</Label>
                                        <Textarea />
                                    </div>
                                    <div className="flex gap-3 mt-5 justify-end">
                                        <Link href={"/dashboard/cash"}> <Button variant={"outline"}>Cancel</Button></Link>
                                        <Button>Buat Akun</Button>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <EditSaldoAwal open={open} setOpen={setOpen} />
        </>
    )
}