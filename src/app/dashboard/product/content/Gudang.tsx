"use client"
import CardAnalytics from "@/components/CardAnalytics";
import AnalyticBoxProduct from "./AnalyticBoxProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable } from "../../cash/data/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { columns_gudang } from "../data/colums_gudang";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { data_gudang } from "../data/dummy";

export default function Gudang() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <AnalyticBoxProduct />
                <Card>
                    <CardContent className="p-3">
                        <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap justify-end gap-5">
                            <div className="flex items-center space-x-2">
                                <Switch id="show-inactive" />
                                <Label htmlFor="show-inactive">Tampilkan gudang tidak aktif</Label>
                            </div>
                            <div>
                                <Button>Impor</Button>
                            </div>

                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardContent className="py-6">
                        <DataTable data={data_gudang} columns={columns_gudang} search_placeholder="Cari gudang..." search_data="nama_gudang" />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}