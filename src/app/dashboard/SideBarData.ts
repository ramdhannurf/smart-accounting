import { ActivitySquare, Banknote, BookUser, Box, Coins, Contact, FileText, Home, Landmark, Package, Package2, PercentSquare, Settings, ShoppingBasket, Users, Users2 } from "lucide-react";

export const links: any = [
    {
        title: "Dashboard",
        label: "",
        href: "/dashboard",
        icon: Home,
    },
    {
        title: "Ringkasan Bisnis",
        label: "",
        href: "/dashboard/overview",
        icon: ActivitySquare,
    },
    {
        title: "Laporan",
        label: "",
        href: "/dashboard/report",
        icon: FileText,
    }
]

export const transaksi: any = [
    {
        title: "Kas & Bank",
        label: "",
        icon: Landmark,
       href: "/dashboard/cash"
    },
    {
        title: "Penjualan",
        label: "",
        icon: Coins,
       href: "/dashboard/sales"
    },
    {
        title: "Pembelian",
        label: "",
        icon: ShoppingBasket,
       href: "/dashboard/purchase"
    },
    {
        title: "Biaya",
        label: "",
        icon: Banknote,
       href: "/dashboard/expenses"
    },
]

export const data_master:any = [
    {
        title: "Kontak",
        label: "",
        icon: BookUser,
       href: "/dashboard/contact"
    },
    {
        title: "Produk",
        label: "",
        icon: Package,
       href: "#"
    },
    {
        title: "Akun-Akun",
        label: "",
        icon: Users,
       href: "/dashboard/list_account"
    },
]

export const settings: any = [
    {
        title: "Settings",
        label: "",
        icon: Settings,
       href: "#"
    }
]