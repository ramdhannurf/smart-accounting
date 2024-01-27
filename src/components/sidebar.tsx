import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Nav } from "./nav";
import { data_master, links, settings, transaksi } from "@/app/dashboard/SideBarData";
import { useTranslation } from "@/i18n/client";
import { ActivitySquare, AlertCircle, Archive, ArchiveX, Banknote, BookUser, Coins, File, FileText, Home, Inbox, Landmark, Maximize, Menu, MessagesSquare, Minimize, Package, Send, Settings, ShoppingBasket, ShoppingCart, Trash2, Users, Users2, Wallet } from "lucide-react"
import { Dispatch } from "react";
import { SetStateAction } from "jotai";
import { Button, buttonVariants } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SideBar({ isCollapsed, set_theme, open, setOpen, setCollapsed, setLayout, panel }: { isCollapsed: boolean, set_theme: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, setCollapsed: Dispatch<SetStateAction<boolean>>, setLayout: Dispatch<SetStateAction<Array<number>>>, panel: any }) {
    const { t } = useTranslation('translations');

    const links: any = [
        {
            title: t('sidebar.information.dashboard'),
            label: "",
            href: "/dashboard",
            icon: Home,
        },
        {
            title: t('sidebar.information.overview_business'),
            label: "",
            href: "/dashboard/overview",
            icon: ActivitySquare,
        },
        {
            title: t('sidebar.information.report'),
            label: "",
            href: "/dashboard/report",
            icon: FileText,
        },
        {
            title: t('sidebar.information.budget'),
            label: "",
            href: "/dashboard/budget",
            icon: Wallet,
        }
    ]

    const transaksi: any = [
        {
            title: t('sidebar.transaction.cash_bank'),
            label: "",
            icon: Landmark,
            href: "/dashboard/cash"
        },
        {
            title: t('sidebar.transaction.sales'),
            label: "",
            icon: Coins,
            href: "/dashboard/sales"
        },
        {
            title: t('sidebar.transaction.purchase'),
            label: "",
            icon: ShoppingBasket,
            href: "/dashboard/purchase"
        },
        {
            title: t('sidebar.transaction.expenses'),
            label: "",
            icon: Banknote,
            href: "/dashboard/expenses"
        },
    ]

    const data_master: any = [
        {
            title: t('sidebar.master_data.contact'),
            label: "",
            icon: BookUser,
            href: "/dashboard/contact"
        },
        {
            title: t('sidebar.master_data.product'),
            label: "",
            icon: Package,
            href: "/dashboard/product"
        },
        {
            title: t('sidebar.master_data.list_account'),
            label: "",
            icon: Users,
            href: "/dashboard/list_account"
        },
    ]

    const settings: any = [
        {
            title: t('sidebar.settings'),
            label: "",
            icon: Settings,
            href: "/dashboard/settings"
        }
    ]
    return (
        <>
            <div className={cn("flex h-[64px] items-center", isCollapsed ? 'h-[64px] justify-center' : 'px-2')}>
                {
                    isCollapsed ? <img src="/assets/logo.png" className="w-[40px]" alt="" /> : <img src={`${set_theme === "light" ? "/assets/logo-navbar.png" : "/assets/logo-navbar-dark.png"}`} className="w-[200px]" alt="" />
                }
            </div>
            <div data-collapsed={isCollapsed}
                className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
                <div className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <Button size={"sm"} className="p-0 h-9 w-9 justify-center" onClick={() => {
                                if (isCollapsed === false) {
                                    console.log("MINIFIZE")
                                    setCollapsed(true)
                                    panel?.collapse();
                                    setLayout([4, 96]);
                                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                        true
                                    )}`
                                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                                        [4, 96]
                                    )}`
                                } else {
                                    setCollapsed(false)
                                    panel?.resize(15)
                                    setLayout([15, 85]);
                                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                        false
                                    )}`
                                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                                        [15, 85]
                                    )}`
                                }

                            }}>
                                {
                                    isCollapsed === true ? <Menu className="h-4 w-4" /> : <Menu className="h-4 w-4" />
                                }
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="flex items-center gap-4">
                            <span className="ml-auto">
                                Minimize
                            </span>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            {/* <div
                data-collapsed={isCollapsed}
                className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
            >
                <div className={`grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2}`}>
                    <Button size={"sm"} className={`w-full justify-start gap-2 ${isCollapsed ? "h-9 w-9 justify-center " : ""}`}>
                        <Menu size={16} className="h-4 w-4" />
                        {
                            !isCollapsed && <span>Minimize</span>
                        }
                    </Button>
                </div>
            </div> */}

            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Informasi</small></div>
            }

            <Nav
                open={open}
                setOpen={setOpen}
                isCollapsed={isCollapsed}
                links={links}
            />
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Transaksi</small></div>
            }

            <Nav
                open={open}
                setOpen={setOpen}
                isCollapsed={isCollapsed}
                links={transaksi}
            />
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Data Master</small></div>
            }

            <Nav
                open={open}
                setOpen={setOpen}
                isCollapsed={isCollapsed}
                links={data_master}
            />
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Lain-Lain</small></div>
            }

            <Nav
                open={open}
                setOpen={setOpen}
                isCollapsed={isCollapsed}
                links={settings}
            />

            {
                !isCollapsed && <div className="px-4 mt-5">
                    <p className="text-muted-foreground font-medium text-xs">ID Perusahaan<br />
                        <span className="font-bold">31233</span>
                    </p>
                </div>
            }
        </>
    )
}