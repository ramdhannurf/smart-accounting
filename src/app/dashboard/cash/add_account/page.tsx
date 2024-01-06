import { ComboBox } from "@/components/ComboBox";
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
    return (
        <>
            <InnerContent>
                <div>
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
                            <CardTitle>Informasi akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="">
                                <div className="flex flex-col gap-4 w-1/2">
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
        </>
    )
}