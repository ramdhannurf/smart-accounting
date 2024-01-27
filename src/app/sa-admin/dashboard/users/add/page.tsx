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

export default function AddUsersPage() {
    return (
        <>
            <InnerContent>
                <Title title="Tambah User Baru" subtitle="Users"></Title>
                <div className="flex flex-col gap-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi User</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4 w-1/2">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Nama Lengkap</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Nama Perusahaan</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Email Kerja</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Nomor Handphone</Label>
                                    <Input />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="">Password</Label>
                                    <Input disabled value={"password is default"} />
                                </div>

                                <div className="flex justify-end gap-3">
                                    <Link href="/sa-admin/dashboard/users">
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