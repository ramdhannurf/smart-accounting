"use client"
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "@/components/ui/select"
import DropdownButton from "@/components/DropdownButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TableBudget from "./table/table";
import { Pencil } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Title from "@/components/Title";
import { useTranslation } from "@/i18n/client";


export default function BudgetPage() {
    const [startDate, setStartDate] = useState<any>(new Date());
    const { t } = useTranslation('translations');
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title={t('budget.title')} subtitle={t('budget.subtitle')}>
                        <Link href={"/dashboard/report/profit_loss"}>
                            <Button>{t('budget.button')}</Button>
                        </Link>
                    </Title>
                    <Card className="mb-5">
                        <CardContent className="py-4 h-full">
                            <div className="flex justify-between 2xl:flex-nowrap xl:flex-nowrap flex-wrap">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap flex-wrap gap-3">
                                    <div className="flex flex-col gap-2">
                                        <Label>{t('budget.form.first_period')}</Label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>{t('budget.form.interval')}</Label>
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
                                    <div className="flex flex-col gap-2">
                                        <Label>{t('budget.form.number_intervals')}</Label>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1 Periode">1 Periode</SelectItem>
                                                <SelectItem value="2 Periode">2 Periode</SelectItem>
                                                <SelectItem value="3 Periode">3 Periode</SelectItem>
                                                <SelectItem value="4 Periode">4 Periode</SelectItem>
                                                <SelectItem value="6 Periode">6 Periode</SelectItem>
                                                <SelectItem value="8 Periode">8 Periode</SelectItem>
                                                <SelectItem value="12 Periode">12 Periode</SelectItem>
                                                <SelectItem value="24 Periode">24 Periode</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Button className="relative top-5">{t('button.filter')}</Button>
                                    </div>
                                </div>

                                <div className="flex gap-3 relative 2xl:top-5;flex-wrap xl:top-5 md:top-5 top-0 2xl:mt-0 xl:mt-0 md:mt-0 mt-5">
                                    <DropdownButton title={t('button.export')} variant={"outline"}>
                                        <DropdownButton.Link href="#">PDF</DropdownButton.Link>
                                        <DropdownButton.Link href="#">Excel</DropdownButton.Link>
                                        <DropdownButton.Link href="#">CSV</DropdownButton.Link>
                                    </DropdownButton>
                                    <Link href={"/dashboard/budget/add"}>
                                        <Button>{t('budget.btn_add')}</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                        <Tabs defaultValue="terbaru">
                            <TabsList>
                                <TabsTrigger value="terbaru">{t('budget.tab.rincian_terbaru')}</TabsTrigger>
                                <TabsTrigger value="list">{t('budget.tab.list_rincian')}</TabsTrigger>
                            </TabsList>
                            <TabsContent value="terbaru">
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap flex-wrap gap-5">
                                            <div>
                                                <CardTitle>{t('budget.rincian_anggaran')}</CardTitle>
                                                <CardDescription>January 2024 - December 2024</CardDescription>
                                            </div>
                                            <div>
                                                <Button><Pencil size={16} className="mr-2" /> {t('button.edit')}</Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <TableBudget editable={false} />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="list">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>List Anggaran</CardTitle>
                                    </CardHeader>
                                    <CardContent className="overflow-y-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[150px] text-white bg-primary">Tanggal</TableHead>
                                                    <TableHead className="text-white bg-primary">Nama Anggaran</TableHead>
                                                    <TableHead className="text-white bg-primary">Periode</TableHead>
                                                    <TableHead className="text-white bg-primary"></TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-semibold">17/01/2024</TableCell>
                                                    <TableCell>Rincian Anggaran</TableCell>
                                                    <TableCell>January 2024 - December 2024</TableCell>
                                                    <TableCell>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                                    <span className="sr-only">Open menu</span>
                                                                    <DotsHorizontalIcon className="h-4 w-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                <DropdownMenuItem>
                                                                    Detail
                                                                </DropdownMenuItem>
                                                                <DropdownMenuSeparator />
                                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                                <DropdownMenuItem>Hapus</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>
            </InnerContent>
        </>
    )
}