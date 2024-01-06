"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PelangganTabs from "./Pelanggan";
import { analytics_lainnya, analytics_pelanggan, analytics_supplier } from "./data/tabs";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import DropdownButton from "@/components/DropdownButton";
import { Filter } from "lucide-react";
import ModalAddGroup from "./data/ModalAddGroup";
import Link from "next/link";
import ModalExport from "./data/ModalExport";
import { SheetComponent } from "@/components/SheetComponent";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DataTable } from "../cash/data/data-table";
import { columns_contact } from "./data/columns";



export default function ContactPage() {
    const [tabs, setTabs] = useState<string>("pelanggan");
    const [analytics, setAnalytics] = useState<Array<{ title: string, count: number, total: string, color: string }>>([]);

    const [open_group, setOpenGroup] = useState<boolean>(false);
    const [open_export, setOpenExport] = useState<boolean>(false);
    const [open_filter, setOpenFilter] = useState<boolean>(false);


    useEffect(() => {
        if (tabs === "pelanggan") {
            setAnalytics(analytics_pelanggan);
        } else if (tabs === "supplier") {
            setAnalytics(analytics_supplier)
        } else {
            setAnalytics(analytics_lainnya)
        }
    }, [tabs]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <h1 className="font-semibold text-2xl">Kontak</h1>
                                </div>
                                <div>
                                    <Link href={"/dashboard/contact/add"}>
                                        <Button>Buat Kontak</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Tabs defaultValue="pelanggan" className="" onValueChange={(value) => setTabs(value)}>
                        <TabsList>
                            <TabsTrigger value="pelanggan">Pelanggan</TabsTrigger>
                            <TabsTrigger value="supplier">Supplier</TabsTrigger>
                            <TabsTrigger value="karyawan">Karyawan</TabsTrigger>
                            <TabsTrigger value="lainnya">Lainnya</TabsTrigger>
                            <TabsTrigger value="semua">Semua</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="flex flex-col gap-1 mt-3">
                        <div className="mb-3 grid grid-cols-3 gap-5">
                            {
                                analytics.map((el, i: number) => {
                                    return <Card>
                                        <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg flex justify-between !flex-row">
                                            <div className="self-center">
                                                <CardTitle className="text-sm">{el.title}</CardTitle>
                                            </div>
                                            <div>
                                                <Badge className="bg-white text-black">{el.count}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex justify-between">
                                                <div className="mt-2">
                                                    <small>Total</small>
                                                    <h3 className="text-lg font-bold">{el.total}</h3>
                                                </div>

                                            </div>
                                        </CardContent>
                                    </Card>
                                })
                            }
                        </div>
                        <Card>
                            <CardContent className="py-3">
                                <div className="flex justify-between">
                                    <Button onClick={() => setOpenGroup(true)}>Atur Grup Kontak</Button>
                                    <div className="flex gap-3">
                                        <DropdownButton title="Impor" variant={"outline"}>
                                            <DropdownButton.Link href="#">Data Pelanggan</DropdownButton.Link>
                                            <DropdownButton.Link href="#">Kredit Memo</DropdownButton.Link>
                                        </DropdownButton>
                                        <Button onClick={() => setOpenExport(true)}>Ekspor</Button>
                                        <Button onClick={() => setOpenFilter(true)}><Filter size={16} className="mr-2" /> Filter</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="mt-3">
                            <CardHeader>
                                <CardTitle>List Kontak</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <DataTable data={[]} columns={columns_contact} search_data="name" search_placeholder="Cari nama panggilan..." />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </InnerContent>
            <ModalAddGroup open={open_group} setOpen={setOpenGroup} />
            <ModalExport open={open_export} setOpen={setOpenExport} />
            <SheetComponent open={open_filter} setOpen={setOpenFilter} title="Filter list kontak" desc="">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <Label>Kata kunci</Label>
                        <Input />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Grup</Label>
                        <Input />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Nomor telepon</Label>
                        <Input />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="all" />
                        <Label htmlFor="all">Tampilkan kontak yang diarsipkan</Label>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="flex-1">
                            <Button variant={"link"}>Atur ulang</Button>
                        </div>
                        <div className="flex gap-3">
                            <Button variant={"outline"} onClick={() => setOpenFilter(false)}>Batal</Button>
                            <Button>Terapkan</Button>
                        </div>
                    </div>
                </div>
            </SheetComponent>
        </>
    )
}