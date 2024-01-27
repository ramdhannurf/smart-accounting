"use client"
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { LaporanContentType } from "@/components/data/Laporan";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";


export default function ReportPage() {
    const { t } = useTranslation('translations');
    const laporan_content: Array<LaporanContentType> = [
        {
            title: t('report.item.profit_loss'),
            desc: "Menampilkan semua pendapatan yang diperoleh dan biaya yang dikeluarkan dalam periode tertentu. Template laporan versi terkini bisa Anda custom sesuai kebutuhan.",
            href: "/dashboard/report/profit_loss",
            name: "profit_loss"
        },
        {
            title: t('report.item.journal'),
            desc: "Menampilkan semua journal entry per transaksi dalam periode tertentu. Anda dapat melacak transaksi yang masuk ke masing-masing akun.",
            href: "/dashboard/report/journal",
            name: "journal"
        },
        {
            title: t('report.item.ledger'),
            desc: "Menampilkan semua transaksi berdasarkan akun dalam periode tertentu, termasuk kronologi pergerakan transaksinya selama periode berlangsung.",
            href: "/dashboard/report/general_ledger",
            name: "general_ledger"
        },
        {
            title: t('report.item.cash_flow'),
            desc: "Menampilkan pergerakan uang masuk dan keluar dari transaksi dalam periode tertentu. Template laporan ini bisa Anda custom sesuai kebutuhan.",
            href: "/dashboard/report/cash_flow",
            name: "cash_flow"
        },
        {
            title: t('report.item.tax_with'),
            desc: "Menampilkan dasar pengenaan pajak (DPP), tarif pajak, dan jumlah pajak dengan tipe pemotongan yang digunakan di transaksi dalam periode tertentu.",
            href: "/dashboard/report/witholding_tax_report",
            name: "witholding_tax_report"
        },
        {
            title: t('report.item.sales_tax'),
            desc: "Menampilkan dasar pengenaan pajak (DPP), tarif pajak, dan jumlah pajak dengan pajak pertambahan nilai (PPN) yang digunakan di transaksi dalam periode tertentu.",
            href: "/dashboard/report/sales_tax_report",
            name: "sales_tax_report"
        }
    ]
    return (
        <>
            <InnerContent>
                <div>
                    <Title title="Laporan" subtitle="">
                        <Input
                            type="search"
                            placeholder="Cari laporan..."
                            className="md:w-[100px] lg:w-[300px]"
                        />
                    </Title>
                    <Card>
                        <CardContent className="py-8 px-8">
                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                                {
                                    laporan_content.map((el, i: number) => {
                                        return <Card key={i} className="shadow-none">
                                            <CardContent className="py-4 flex flex-col gap-2">
                                                <h3 className="text-lg font-bold">{el.title}</h3>
                                                <p className="text-sm">{el.desc}</p>
                                                <div className="mt-2">
                                                    <Link href={el.href}>
                                                        <Button size={'sm'}>Lihat laporan</Button>
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    })
                                }
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}