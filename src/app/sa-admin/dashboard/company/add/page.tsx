"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComboBox } from "@/components/ComboBox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Title from "@/components/Title";
import Link from "next/link";

export default function AddCompanyPage() {
    return (
        <>
            <InnerContent>
                <Title title="Tambah Perusahaan Baru" subtitle="Perusahaan"></Title>
                <div className="flex flex-col gap-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Perusahaan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4 w-1/2">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Nama perusahaan</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Industri</Label>
                                    <ComboBox select={[]} placeholder="Pilih industri" name="industri" search="Cari industri..." />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Bahasa untuk Daftar Akun</Label>
                                    <ComboBox select={[]} placeholder="Pilih bahasa" name="bahasa" search="Cari bahasa..." />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Paket Fitur</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih paket" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="free">
                                                <span className="font-medium">Free</span> -{" "}
                                                <span className="text-muted-foreground">
                                                    Trial for two weeks
                                                </span>
                                            </SelectItem>
                                            <SelectItem value="pro">
                                                <span className="font-medium">Pro</span> -{" "}
                                                <span className="text-muted-foreground">
                                                    $9/month per user
                                                </span>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Keamanan PIN (Optional)</Label>
                                    <Input type="number" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Terapkan ke User</Label>
                                    <ComboBox select={[]} placeholder="Pilih user" name="user" search="Cari user..." />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <Link href="/sa-admin/dashboard/company">
                                        <Button variant={"outline"}>Batal</Button>
                                    </Link>
                                    <Button>Simpan</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}