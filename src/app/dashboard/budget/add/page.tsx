"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import TableBudget from "../table/table";
import { useTranslation } from "@/i18n/client";


export default function BudgetNewPage() {
    const [startDate, setStartDate] = useState<any>(new Date());
    const { t } = useTranslation('translations');

    const [nama_anggaran, setNamaAnggaran] = useState<string>("Rincian Anggaran");

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">{t('budget.subtitle')}</p>
                                    <h1 className="font-semibold text-2xl">{t('budget.btn_add')}</h1>
                                </div>
                                <div className="flex gap-3 self-center">

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>{t('budget.add.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <Label>{t('budget.add.form.nama_anggaran')}</Label>
                                        <Input onChange={(e) => setNamaAnggaran(e.target.value)} value={nama_anggaran} />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label>{t('budget.add.form.awal_periode')}</Label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3">
                                        <Label>{t('budget.add.form.jumlah_periode')}</Label>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1 Bulan">1 Bulan</SelectItem>
                                                <SelectItem value="3 Bulan">3 Bulan</SelectItem>
                                                <SelectItem value="4 Bulan">4 Bulan</SelectItem>
                                                <SelectItem value="6 Bulan">6 Bulan</SelectItem>
                                                <SelectItem value="12 Bulan">12 Bulan</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label>{t('budget.add.form.periode_sebelumnnya')}</Label>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1 Periode Terakhir">1 Periode Terakhir</SelectItem>
                                                <SelectItem value="3 Periode Terakhir">3 Periode Terakhir</SelectItem>
                                                <SelectItem value="6 Periode Terakhir">6 Periode Terakhir</SelectItem>
                                                <SelectItem value="12 Periode Terakhir">12 Periode Terakhir</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button>{t('button.terapkan')}</Button>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <CardHeader>
                            <CardTitle>{nama_anggaran}</CardTitle>
                            <CardDescription>Weworks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <TableBudget editable={true} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-4">
                            <div className="flex justify-end gap-3">
                                <Link href={"/dashboard/budget"}>
                                    <Button variant={"outline"}>{t('button.back')}</Button>
                                </Link>
                                <Button>{t('button.save')}</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}