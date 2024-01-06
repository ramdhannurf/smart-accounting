"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { DataTable } from "../cash/data/data-table";
import { columns_company } from "./data/columns";
import { DrawerDialog } from "@/components/Dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ComboBox } from "@/components/ComboBox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CompanyPage() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-semibold text-2xl">List Perusahaan</h1>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Link href={"/dashboard/profile"}>
                                        <Button variant={"outline"}>Profil Akun</Button>
                                    </Link>
                                    <Button onClick={() => setOpen(true)}>Daftar Perusahaan Baru</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>List Perusahaan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns_company} data={[{
                                nama_perusahaan: "Acme Inc",
                                role: "Owner",
                                created_at: "01-01-2024",
                                aksi: ""
                            },
                            {
                                nama_perusahaan: "Monsters Inc",
                                role: "Owner",
                                created_at: "02-01-2024",
                                aksi: ""
                            }]} search_data="nama_perusahaan" search_placeholder="Cari nama perusahaan..." />
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
            <DrawerDialog title="Daftar Perusahaan Baru" desc="Lengkapi data berikut untuk mulai pakai Smart Accounting." open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-4">
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
                        <ComboBox select={[]} placeholder="Pilih industri" name="industri" search="Cari industri..." />
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
                    <div className="flex flex-col gap-2 mt-2">
                        <Button>Daftar perusahaan</Button>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>Batal</Button>
                    </div>
                </div>
            </DrawerDialog>
        </>
    )
}