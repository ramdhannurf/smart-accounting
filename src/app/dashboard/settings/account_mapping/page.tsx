"use client"
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { ComboBox } from "@/components/ComboBox";
import { dummy_account } from "../../list_account/data/dummy";
import { useEffect, useState } from "react";



export default function AccountMapping() {
    const [account, setAccount] = useState<Array<any>>([]);

    const mapping_select = () => {
        const data: Array<any> = [];
        dummy_account.map((el: any, i: number) => {
            data.push({ title: `(${el.number}) - ${el.name}`, value: el.number });
        });

        setAccount(data);
    }

    useEffect(() => {
        mapping_select();
    }, []);

    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Pemetaan Akun</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <div className="px-1">
                        <Accordion type="multiple">
                            <AccordionItem value="Penjualan-1">
                                <AccordionTrigger>Penjualan</AccordionTrigger>
                                <AccordionContent>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-3">
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pendapatan Penjualan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Diskon Penjualan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Retur Penjualan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pengiriman Penjualan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pembayaran di Muka</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Penjualan Belum Ditagih</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Piutang Belum Ditagih</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Hutang Pajak Penjualan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Pembelian-1">
                                <AccordionTrigger>Pembelian</AccordionTrigger>
                                <AccordionContent>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-3">
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pembelian (COGS)</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pengiriman Pembelian</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Uang Muka Pembelian</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Hutang Belum Ditagih</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Pajak Pembelian</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="AR/AP-1">
                                <AccordionTrigger>AR/AP</AccordionTrigger>
                                <AccordionContent>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-3">
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Piutang Usaha</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Hutang Usaha</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Persediaan-1">
                                <AccordionTrigger>Persediaan</AccordionTrigger>
                                <AccordionContent>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-3">
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Persediaan</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Persediaan Umum</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Persediaan Rusak</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Persediaan Produksi</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Lainnya-1">
                                <AccordionTrigger>Lainnya</AccordionTrigger>
                                <AccordionContent>
                                    <Separator />
                                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-3">
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Ekuitas Saldo Awal</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <Label>Aset Tetap</Label>
                                                    <div className="flex gap-2">
                                                        <Lock size={14} className="self-center" />
                                                        <ComboBox search="Cari akun..." placeholder="Pilih akun" select={account} name="akun" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex justify-end mt-5">
                            <Button>Simpan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}