"use client"
import InnerContent from "@/components/InnerContent"
import BoxWelcome from "./BoxWelcome";
import { useTranslation } from "@/i18n/client";




export default function DashboardPage() {
    const { t } = useTranslation('translations');

    const welcome: Array<{ title: string, href: string, icon: string }> = [
        {
            title: t('dashboard.box_menu.faktur'),
            href: "/dashboard/sales/add/sales_billing",
            icon: "faktur.png",
        },
        {
            title: t('dashboard.box_menu.pemesanan'),
            href: "/dashboard/sales/add/sales_billing",
            icon: "pemesanan.png",
        },
        {
            title: t('dashboard.box_menu.faktur_pembelian'),
            href: "/dashboard/purchase/add/purchase_invoice",
            icon: "pembelian.png",
        },
        {
            title: t('dashboard.box_menu.add_product'),
            href: "/dashboard/product/add",
            icon: "new_product.png",
        },
        {
            title: t('dashboard.box_menu.laba_rugi'),
            href: "/dashboard/report/profit_loss",
            icon: "laba.png",
        },
        {
            title: t('dashboard.box_menu.pencatatan'),
            href: "/dashboard/budget/add",
            icon: "biaya.png",
        }
    ]

    return (
        <>
            <InnerContent>
                <div className="flex flex-col">
                    <div>
                        <div className="flex flex-col text-center mb-7 gap-1">
                            <p className="font-medium text-lg">Selamat malam, Alicia Koch</p>
                            <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                                {
                                    welcome.map((el, i: number) => {
                                        return (
                                            <BoxWelcome title={el.title} href={el.href} icons={el.icon} key={i} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </InnerContent>
        </>
    )
}