"use client"
import DropdownButton from "@/components/DropdownButton";
import InnerContent from "@/components/InnerContent";
import SelectOption from "@/components/SelectOption";
import { laporan_content } from "@/components/data/Laporan";
import { DatePicker } from "@/components/date-time";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionRenderer from "./SectionRenderer";
import Title from "@/components/Title";



export default function DetailReport({ params }: { params: { detail: string } }) {
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const filter_title = laporan_content.filter((item, index) => {
            return item.name === params.detail;
        });

        if (filter_title.length !== 0) {
            setTitle(filter_title[0].title);
        }
    }, []);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title={title} subtitle="Laporan" href="/dashboard/report"></Title>
                    <Card>
                        <CardHeader>
                            <CardTitle>Data Laporan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-10">
                                <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-between">
                                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal awal</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Tanggal akhir</Label>
                                            <DatePicker />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label>Periode</Label>
                                            <Select>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Pilih periode" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Hari Ini">Hari Ini</SelectItem>
                                                    <SelectItem value="Mingguan">Mingguan</SelectItem>
                                                    <SelectItem value="Bulanan">Bulanan</SelectItem>
                                                    <SelectItem value="Triwulan">Triwulan</SelectItem>
                                                    <SelectItem value="Tahunan">Tahunan</SelectItem>
                                                    <SelectItem value="Bulan Lalu">Bulan Lalu</SelectItem>
                                                    <SelectItem value="Tahun Lalu">Tahun Lalu</SelectItem>
                                                    <SelectItem value="Per bulan tahun ini">Per bulan tahun ini</SelectItem>
                                                    <SelectItem value="Custom">Custom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="self-center mt-5">
                                            <Button>Filter</Button>
                                        </div>
                                    </div>
                                    <div className="self-center mt-5">
                                        <DropdownButton title="Ekspor">
                                            <DropdownButton.Link href="#">PDF</DropdownButton.Link>
                                            <DropdownButton.Link href="#">XLSX</DropdownButton.Link>
                                            <DropdownButton.Link href="#">CSV</DropdownButton.Link>
                                        </DropdownButton>
                                    </div>
                                </div>

                                {/* table component */}

                                <div className="overflow-y-auto">
                                    <SectionRenderer name={params.detail} />
                                </div>

                            </div>


                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}