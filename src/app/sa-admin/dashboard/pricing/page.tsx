import { DataTable } from "@/app/dashboard/cash/data/data-table";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil, Plus, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ListFeatures from "./ListFeatures";
import { Label } from "@/components/ui/label";
import { features } from "process";
import { Switch } from "@/components/ui/switch";


const pricing_list = [
    {
        id: 0,
        name: "Pro",
        desc: "Bisnis dengan kebutuhan digitalisasi proses akuntansi perusahaan",
        features: [
            {
                id: 0,
                name: "Bisnis yang sedang berkembang"
            },
            {
                id: 1,
                name: "Kebutuhan akuntansi dasar"
            },
            {
                id: 2,
                name: "Memiliki tim keuangan"
            }
        ],
        pricing_month: "Rp. 399.000",
        pricing_year: "Rp. 399.000",
        discount_month: "15%",
        discount_year: "15%"
    },
    {
        id: 1,
        name: "Enterprise",
        desc: "Bisnis dengan kebutuhan proses akuntansi perusahaan yang seamless",
        features: [
            {
                id: 0,
                name: "Terhubung POS & e-Commerce"
            },
            {
                id: 1,
                name: "Transaksi multi-nasional"
            },
            {
                id: 2,
                name: "Gudang lebih dari satu"
            }
        ],
        pricing_month: "Rp. 899.000",
        pricing_year: "Rp. 899.000",
        discount_month: "15%",
        discount_year: "15%"
    },
    {
        id: 2,
        name: "Enterprise+",
        desc: "Bisnis dengan kebutuhan akuntansi yang lengkap dan lebih fleksibel",
        features: [
            {
                id: 0,
                name: "Skema transaksi fleksibel"
            },
            {
                id: 1,
                name: "Penerapan harga khusus"
            },
            {
                id: 2,
                name: "Laporan profit setiap produk"
            }
        ],
        pricing_month: "Rp. 1.299.000",
        pricing_year: "Rp. 1.299.000",
        discount_month: "15%",
        discount_year: "15%"
    }
]

export default function PricingPage() {
    return (
        <>
            <InnerContent>
                <Title title="Daftar Harga" subtitle=""></Title>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-3 gap-5">
                        {
                            pricing_list.map((el, i: number) => {
                                return <Card key={i} className="h-fit">
                                    <CardHeader>
                                        <CardTitle>{el.name}</CardTitle>
                                        <CardDescription><Textarea value={el.desc} /></CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>Fitur-Fitur (Features)</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="flex flex-col gap-5">
                                                        <Card className="shadow-none">
                                                            <CardContent className="py-3 px-3">
                                                                <div className="flex gap-3">
                                                                    <Input placeholder="Tulis fitur disini..." />
                                                                    <Button size={"icon"}><Plus size={16} /></Button>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                        <div className="flex flex-col">
                                                            {
                                                                el.features.map((el, i: number) => {
                                                                    return <ListFeatures title={`${el.name}`} key={i} id={el.id} />
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>Harga</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="flex flex-col gap-5">
                                                        <div className="flex flex-col gap-2">
                                                            <Label>Harga Perbulan</Label>
                                                            <Input value={el.pricing_month} />
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <Label>Harga Pertahun</Label>
                                                            <Input value={el.pricing_year} />
                                                        </div>
                                                    </div>
                                                    <Separator className="my-4" />
                                                    <div className="flex flex-col gap-5">
                                                        <div className="flex flex-col gap-2">
                                                            <Label>Diskon Perbulan</Label>
                                                            <Input value={el.discount_month} />
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <Label>Diskon Pertahun</Label>
                                                            <Input value={el.discount_year} />
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3">
                                                <AccordionTrigger>Most Popular</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="flex items-center space-x-2">
                                                        <Switch id="airplane-mode" />
                                                        <Label htmlFor="airplane-mode">Set Most Popular</Label>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Button className="w-full mt-5">Simpan</Button>
                                    </CardContent>
                                </Card>
                            })
                        }

                    </div>

                </div>
            </InnerContent>
        </>
    )
}