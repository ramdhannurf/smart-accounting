"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DatePicker } from "@/components/date-time";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { DataTable } from "../data/data-table";
import { columns_rekening_koran, columns_transaksi_jurnal } from "./data/columns";
import { useTranslation } from "@/i18n/client";


export default function CashDetailAccountPage() {

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4 self-center">
                                    <div className="self-center">
                                        <Link href={"/dashboard/expenses"}>
                                            <ArrowLeftCircle className="text-muted-foreground" />
                                        </Link>
                                    </div>
                                    <div className="self-center">
                                        <p className="text-sm text-muted-foreground">Akun - Harga Pokok Penjualan</p>
                                        <h1 className="font-semibold text-2xl">(5-50000) Cost of Sales</h1>
                                    </div>
                                </div>
                                <div className="flex gap-3 self-center">
                                    <Button>Ubah Akun</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Transaksi Akun</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="transaksi_jurnal" className="w-full">
                                <TabsList>
                                    <TabsTrigger value="transaksi_jurnal">Transaksi Jurnal</TabsTrigger>
                                    <TabsTrigger value="rekening_koran">Rekening Koran</TabsTrigger>
                                    {/* <TabsTrigger value="rekonsilasi">
                                        <div className="flex gap-2">
                                            <p>Rekonsilasi</p>
                                            <Badge>0</Badge>
                                        </div>
                                    </TabsTrigger>
                                    <TabsTrigger value="pemetaan_kas">Pemetaan Kas</TabsTrigger> */}
                                </TabsList>
                                <TabsContent value="transaksi_jurnal">
                                    <DataTable columns={columns_transaksi_jurnal} data={[{
                                        tanggal: "01/11/2024",
                                        kontak: "-",
                                        deskripsi: "Expenses #10001",
                                        account: "Cost of Sales",
                                        terima: "0,00",
                                        kirim: "999.000,00",
                                        saldo: "(999.000,00)",
                                        status: "Belum Terkonsiliasi"
                                    }]} search_data="deskripsi" search_placeholder="Cari deskripsi..." />
                                </TabsContent>
                                <TabsContent value="rekening_koran">
                                    <DataTable columns={columns_rekening_koran} data={[]} search_data="deskripsi" search_placeholder="Cari deskripsi..." />
                                </TabsContent>
                                <TabsContent value="rekonsilasi">Change your password here.</TabsContent>
                                <TabsContent value="pemetaan_kas">Change your password here.</TabsContent>
                            </Tabs>

                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}