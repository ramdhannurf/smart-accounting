"use client"
import InnerContent from "@/components/InnerContent"
import BoxWelcome from "./BoxWelcome"
const welcome: Array<{ title: string, href: string, icon: string }> = [
    {
        title: "Buat faktur penjualan",
        href: "#",
        icon: "faktur.png",
    },
    {
        title: "Buat pemesanan penjualan",
        href: "#",
        icon: "pemesanan.png",
    },
    {
        title: "Buat faktur pembelian",
        href: "#",
        icon: "pembelian.png",
    },
    {
        title: "Tambah produk baru",
        href: "#",
        icon: "new_product.png",
    },
    {
        title: "Lihat laporan laba rugi",
        href: "#",
        icon: "laba.png",
    },
    {
        title: "Buat pencatatan biaya",
        href: "#",
        icon: "biaya.png",
    }
]

export default function DashboardPage() {

    return (
        <>
            <InnerContent>
                <div className="flex flex-col">
                    <div>
                        <div className="flex flex-col text-center mb-7 gap-1">
                            <p className="font-medium text-lg">Selamat malam, Alicia Koch</p>
                            <h1 className="text-2xl font-bold">Aktivitas apa yang Anda lakukan?</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    welcome.map((el, i: number) => {
                                        return (
                                            <BoxWelcome title={el.title} href={el.href} icons={el.icon} />
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