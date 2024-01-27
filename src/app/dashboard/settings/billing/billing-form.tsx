"use client"
import { Button } from "@/components/ui/button";
import { DataTable } from "../../cash/data/data-table";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { TableBilling } from "./table-billing";

export default function BillingForm() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Paket Berlangganan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                            <div>
                                <div className="flex flex-col gap-3">
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Pengguna</p>
                                        <p className="text-sm">4 dari 5 orang</p>
                                    </div>
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Partners</p>
                                        <p className="text-sm">0 orang</p>
                                    </div>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Sisa Hari</p>
                                        <p className="text-sm">254 hari</p>
                                    </div>
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Tanggal Kadaluarsa</p>
                                        <p className="text-sm">30/01/2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-primary px-3 py-5 rounded-md h-full grid place-content-center text-center max-w-[400px] w-full">
                                    <div className="w-fit p-4  bg-white rounded-md">
                                        <p className="text-black font-medium text-sm">Paket</p>
                                        <h1 className="text-xl font-bold text-black">Enterprice +</h1>
                                        <Button size={"sm"} className="mt-3">Upgrade Paket</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 pt-7 gap-8">
                            <div className="flex flex-col gap-6">
                                <CardTitle>Infomasi Tagihan</CardTitle>
                                <div className="flex flex-col gap-3">
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Jangka Pembayaran</p>
                                        <p className="text-sm">1 Bulan</p>
                                    </div>
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1">
                                        <p className="text-sm font-medium">Tanggal Pembayaran Berikutnya</p>
                                        <p className="text-sm">30/01/2023</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-6">
                                    <CardTitle>Detail Tagihan</CardTitle>
                                    <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertTitle></AlertTitle>
                                        <AlertDescription>
                                            Untuk mengetahui info tagihan dan melanjutkan proses ini, silakan hubungi tim support kami.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Riwayat Pembayaran</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-y-auto">
                            <TableBilling />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}