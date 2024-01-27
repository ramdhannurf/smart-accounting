"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DataTable } from "./data/data-table";
import { columns } from "./data/columns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";
import { useTranslation } from "@/i18n/client";



export default function CashPage() {
    const router = useRouter();
    const { t } = useTranslation('translations');
    const analytics_cash: Array<{ title: string, count: number, total: string, color: string }> = [
        {
            title: t('cash_bank.box.one'),
            count: 0,
            total: "Rp. 0,00",
            color: "#c7e6c7"
        },
        {
            title: t('cash_bank.box.two'),
            count: 0,
            total: "Rp. 0,00",
            color: "#f8c9c4"
        },
        {
            title: t('cash_bank.box.two'),
            count: 0,
            total: "Rp. 0,00",
            color: "#cef1fd"
        },
        {
            title: t('cash_bank.box.tree'),
            count: 0,
            total: "Rp. 0,00",
            color: "#cef1fd"
        },
    ]

    const go_to = (url: string) => {
        router.push(url);
    }

    return (
        <>
            <InnerContent>
                <div>
                    <Title title={t('cash_bank.title')} subtitle={t('cash_bank.subtitle')}>
                        <Link href={'/dashboard/cash/add_account'}><Button>{t('cash_bank.button')}</Button></Link>
                    </Title>
                    <div className="mb-5 grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                        {
                            analytics_cash.map((el, i: number) => {
                                return <Card key={i}>
                                    <CardHeader style={{ backgroundColor: el.color }} className="rounded-t-lg">
                                        <CardTitle className="text-sm text-black">{el.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mt-2">
                                            <small>Total</small>
                                            <h3 className="text-lg font-bold">{el.total}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            })
                        }
                    </div>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                <CardTitle>{t('cash_bank.list_account_cash')}</CardTitle>
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                    <Select onValueChange={go_to}>
                                        <SelectTrigger className="w-[180px] bg-primary text-white">
                                            <SelectValue placeholder={t('cash_bank.buat_transaksi')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="/dashboard/cash/transfer_cash">{t('cash_bank.button_transaction.one')}</SelectItem>
                                            <SelectItem value="/dashboard/cash/accept_cash">{t('cash_bank.button_transaction.two')}</SelectItem>
                                            <SelectItem value="/dashboard/cash/send_cash">{t('cash_bank.button_transaction.tree')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Link href={"/dashboard/rekonsilasi"}>
                                        <Button>{t('cash_bank.rekonsilasi')}</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-y-auto">
                                <DataTable columns={columns} data={[]} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}