import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRightFromCircle } from "lucide-react";

export default function SettingsPage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Profil Perusahaan</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                        <Card className="shadow-none">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Info perusahaan</CardTitle>
                                    <Button size={"icon"}><ArrowUpRightFromCircle size={16} /></Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-muted-foreground">Nama perusahaan</p>
                                        <p className="text-sm text-muted-foreground">Alamat perusahaan</p>
                                        <p className="text-sm text-muted-foreground">Nomor telepon</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium">Weworks</p>
                                        <p className="text-sm font-medium">Jl Bandung No.204</p>
                                        <p className="text-sm font-medium">0899-8766-0123</p>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                        <Card className="shadow-none">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Info akun bank</CardTitle>
                                    <Button size={"icon"}><ArrowUpRightFromCircle size={16} /></Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-muted-foreground">Nama bank</p>
                                        <p className="text-sm text-muted-foreground">Kantor cabang</p>
                                        <p className="text-sm text-muted-foreground">Alamat cabang</p>
                                        <p className="text-sm text-muted-foreground">Nomor rekening</p>
                                        <p className="text-sm text-muted-foreground">Pemilik rekening</p>
                                        <p className="text-sm text-muted-foreground">Swift code</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium">Bank Central Asia</p>
                                        <p className="text-sm font-medium">Jl Bandung No.204</p>
                                        <p className="text-sm font-medium">Jl Bandung No.204</p>
                                        <p className="text-sm font-medium">10009823</p>
                                        <p className="text-sm font-medium">Alicia Koch</p>
                                        <p className="text-sm font-medium">CENAIDJA00110009823</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-none">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Info lainnya</CardTitle>
                                    <Button size={"icon"}><ArrowUpRightFromCircle size={16} /></Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <Label>Logo Perusahaan</Label>
                                        <div className="flex gap-4">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Button variant={"outline"} size={"sm"} className="self-center">Edit</Button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="show-in-document" disabled />
                                            <Label htmlFor="show-in-document">Tampilkan logo di laporan.</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="alamat" disabled />
                                            <Label htmlFor="alamat">Bedakan alamat penagihan dengan alamat pengiriman</Label>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grid grid-cols-2">
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm text-muted-foreground">Alamat pengiriman</p>
                                            <p className="text-sm text-muted-foreground">NPWP</p>
                                            <p className="text-sm text-muted-foreground">Nomor fax</p>
                                            <p className="text-sm text-muted-foreground">Website</p>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm font-medium">Jl. Bandung No. 33</p>
                                            <p className="text-sm font-medium">09.254.294.3407.000</p>
                                            <p className="text-sm font-medium">0999899877</p>
                                            <p className="text-sm font-medium">weworks.my.id</p>
                                            <p className="text-sm font-medium">weeeeworks@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-none">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Pengaturan fitur tambahan</CardTitle>
                                    <Button size={"icon"}><ArrowUpRightFromCircle size={16} /></Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="show-in-document" disabled />
                                            <Label htmlFor="show-in-document">Approval</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="alamat" disabled />
                                            <Label htmlFor="alamat">Ringkasan kinerja perusahaan (Via Email)</Label>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grid grid-cols-2">
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm text-muted-foreground">Mata uang dasar</p>
                                            <p className="text-sm text-muted-foreground">Format mata uang</p>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm font-medium">IDR-Indonesia Rupiah</p>
                                            <p className="text-sm font-medium">Dengan desimal</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}