import InnerContent from "@/components/InnerContent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next"
import Image from "next/image"
import { SidebarNav } from "./sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";


export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Profil Perusahaan",
        href: "/dashboard/settings",
    },
    {
        title: "Akun Pribadi",
        href: "/dashboard/settings/profile",
    },
    {
        title: "Tagihan",
        href: "/dashboard/settings/billing",
    },
    {
        title: "Tampilan",
        href: "/dashboard/settings/appearance",
    },
    {
        title: "Notifikasi",
        href: "/dashboard/settings/notifications",
    },
    {
        title: "Pemetaan Akun",
        href: "/dashboard/settings/account_mapping",
    },
    {
        title: "Hak Akses (Owner)",
        href: "/dashboard/settings/authorization",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <InnerContent>
                <Card className="overflow-y-none">
                    <CardContent className="py-0 px-0">
                        <div className="space-y-6 p-5">
                            <div className="space-y-0.5">
                                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                                <p className="text-muted-foreground">
                                    Manage your account settings and set e-mail preferences.
                                </p>
                            </div>
                            <Separator className="my-6" />
                            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                                <aside className="-mx-4 lg:w-1/5">
                                    <SidebarNav items={sidebarNavItems} />
                                </aside>
                                <div className="flex-1 h-[64vh] overflow-y-auto">{children}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </InnerContent>
        </>
    )
}