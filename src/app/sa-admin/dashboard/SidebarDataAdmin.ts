import { ActivitySquare, ArrowLeftRight, Building2, DollarSign, Gem, Home, UserCog, Users } from "lucide-react"

export const data_m_admin:any = [
    {
        title: "Dashboard",
        label: "",
        href: "/sa-admin/dashboard",
        icon: Home,
    },
    {
        title: "Daftar Perusahaan",
        label: "",
        href: "/sa-admin/dashboard/company",
        icon: Building2,
    },
    {
        title: "Daftar User",
        label: "",
        href: "/sa-admin/dashboard/users",
        icon: Users,
    },
    
]

export const data_t_admin:any = [
    {
        title: "Daftar Harga",
        label: "",
        href: "/sa-admin/dashboard/pricing",
        icon: Gem,
    },
    {
        title: "Daftar Penjualan",
        label: "",
        href: "/sa-admin/dashboard/sales",
        icon: DollarSign,
    },
]

export const data_s_admin:any = [
    {
        title: "Log Aktivitas",
        label: "",
        href: "/sa-admin/dashboard/log",
        icon: ActivitySquare,
    },
    {
        title: "Dukungan Teknis",
        label: "",
        href: "/sa-admin/dashboard/chat",
        icon: UserCog,
    },
]