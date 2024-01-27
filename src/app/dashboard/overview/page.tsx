"use client"
import CardAnalytics from "@/components/CardAnalytics";
import InnerContent from "@/components/InnerContent";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import ChartRenderer from "./ChartRenderer";
import { useTranslation } from "@/i18n/client";
import { Check, Info, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DataOverviewType {
    title: string,
    id: number,
    span: string,
    name: string
}



export default function BusinessOverviewPage() {
    const { t } = useTranslation('translations');
    const [change_layout, setChangeLayout] = useState<boolean>(false);

    const data_overview: Array<DataOverviewType> = [
        {
            title: t('overview_business.box_chart.arus_kas'),
            id: 0,
            span: "2xl:col-span-2 xl:col-span-2 md:col-span-2 col-span-1",
            name: "arus_kas"
        },
        {
            title: t('overview_business.box_chart.sales_due'),
            id: 1,
            span: "col-span-1",
            name: "penjualan_terhutang"
        },
        {
            title: t('overview_business.box_chart.unpaid_bills'),
            id: 2,
            span: "col-span-1",
            name: "tagihan_belum_dibayar",
        },
        {
            title: t('overview_business.box_chart.monitor_account'),
            id: 3,
            span: "2xl:col-span-2 xl:col-span-2 md:col-span-2 col-span-1",
            name: "daftar_akun_terpantau"
        },
        {
            title: t('overview_business.box_chart.current_assets'),
            id: 4,
            span: "col-span-1",
            name: "aset_lancar_lainnya"
        },
        {
            title: t('overview_business.box_chart.cash'),
            id: 5,
            span: "col-span-1",
            name: "kas"
        },
        {
            title: t('overview_business.box_chart.operating_costs'),
            id: 6,
            span: "2xl:col-span-2 xl:col-span-2 md:col-span-2 col-span-1",
            name: "biaya_operasional"
        },
        {
            title: t('overview_business.box_chart.profit_loss'),
            id: 7,
            span: "2xl:col-span-2 xl:col-span-2 md:col-span-2 col-span-1",
            name: "laba_rugi"
        },
        {
            title: t('overview_business.box_chart.best_selling'),
            id: 8,
            span: "2xl:col-span-2 xl:col-span-2 md:col-span-2 col-span-1",
            name: "produk_terlaris"
        },
    ]
    const [activeId, setActiveId] = useState(null);
    const [items, setItems] = useState<Array<DataOverviewType>>(data_overview);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event: any) => {
        setActiveId(null);
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            console.log(oldIndex, newIndex);
            setItems((items) => {
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    // useEffect(() => {
    //     console.log(items);
    // }, [items]);

    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Title title={t('overview_business.title')} subtitle="">
                        {
                            change_layout === true ? <div className="flex gap-3">
                                <Button size={"icon"} onClick={() => setChangeLayout(false)}><Check size={16} /></Button>
                                <Button size={"icon"} variant={"outline"} onClick={() => setChangeLayout(false)}><X size={16} /></Button>
                            </div> : <Button onClick={() => setChangeLayout(true)}>{t('overview_business.setup_dashboard')}</Button>
                        }

                    </Title>
                    {
                        change_layout === true && <Alert className="mb-4">
                            <Info className="h-4 w-4" />
                            <AlertTitle>Atur Layout Box Chart dengan Drag and Drop</AlertTitle>
                            <AlertDescription>
                                Dengan menggunakan fungsi drag and drop, Anda dapat mengoptimalkan tampilan box chart secara langsung. Sesuaikan posisi dan hubungan antar elemen dengan mudah dan efisien.
                            </AlertDescription>
                        </Alert>
                    }
                    <Tabs defaultValue="dashboard" className="w-full">
                        <TabsList>
                            <TabsTrigger value="dashboard">Dashbor 1</TabsTrigger>
                            <TabsTrigger value="dashboard_2">Dashbor 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="dashboard">
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                                onDragStart={handleDragStart}
                            >
                                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 grid-cols-1 w-full gap-3">
                                    <SortableContext items={items} strategy={rectSortingStrategy}>
                                        {
                                            items.map((el, i: number) => {
                                                return <CardAnalytics title={el.title} className={el.span} id={el.id} key={i} handle={!change_layout} value={el.id}>
                                                    <ChartRenderer name={el.name} />
                                                </CardAnalytics>
                                            })
                                        }
                                    </SortableContext>
                                </div>
                            </DndContext>

                        </TabsContent>
                        <TabsContent value="dashboard_2"></TabsContent>
                    </Tabs>
                </div>
            </InnerContent>
        </>
    )
}