"use client"
import { Nav } from "@/components/nav"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ActivitySquare, AlertCircle, Archive, ArchiveX, File, FileText, Home, Inbox, MessagesSquare, Send, ShoppingCart, Trash2, Users2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { accounts } from "./data"
import { AccountSwitcher } from "@/components/account-switcher"
import Cookies from 'js-cookie';
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/navbar-user"
import TeamSwitcher from "@/components/team-switcher"
import { data_master, links, settings, transaksi } from "./SideBarData"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/ModeToggle"
import { useTheme } from "next-themes"



export default function DashboardRoot({ children }: { children: React.ReactNode }) {
    const layout = Cookies.get("react-resizable-panels:layout")
    const collapsed = Cookies.get("react-resizable-panels:collapsed")
    const defaultLayout = layout ? JSON.parse(layout) : [15, 85]
    const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;
    const [set_theme, setTheme] = useState<string>("light");
    const { theme } = useTheme();

    useEffect(() => {
        setTheme(theme || "light");
    }, [theme]);

    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

    return (
        <>
            <TooltipProvider delayDuration={0}>
                <div className="flex-col flex h-screen">
                    <ResizablePanelGroup
                        direction="horizontal"
                        onLayout={(sizes: number[]) => {
                            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                                sizes
                            )}`
                        }}
                        className="h-full items-stretch"
                    >
                        <ResizablePanel
                            defaultSize={defaultLayout[0]}
                            collapsedSize={4}
                            collapsible={true}
                            minSize={15}
                            maxSize={20}
                            onCollapse={() => {
                                setIsCollapsed(true)
                                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                    true
                                )}`
                            }}
                            onExpand={() => {
                                setIsCollapsed(false)
                                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                    false
                                )}`
                            }}
                            className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
                        >
                            <div className={cn("flex h-[64px] items-center", isCollapsed ? 'h-[64px] justify-center' : 'px-2')}>
                                {
                                    isCollapsed ? <img src="/assets/logo.png" className="w-[40px]" alt="" /> : <img src={`${set_theme === "light" ? "/assets/logo-navbar.png" : "/assets/logo-navbar-dark.png"}`} className="w-[200px]" alt="" />
                                }
                            </div>
                            <Separator />
                            {
                                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Informasi</small></div>
                            }

                            <Nav
                                isCollapsed={isCollapsed}
                                links={links}
                            />
                            <Separator />
                            {
                                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Transaksi</small></div>
                            }

                            <Nav
                                isCollapsed={isCollapsed}
                                links={transaksi}
                            />
                            <Separator />
                            {
                                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Data Master</small></div>
                            }

                            <Nav
                                isCollapsed={isCollapsed}
                                links={data_master}
                            />
                            <Separator />
                            {
                                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Lain-Lain</small></div>
                            }

                            <Nav
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
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                            <div className="border-b">
                                <div className="flex h-16 items-center px-4">
                                    <MainNav className="mx-6" />
                                    <div className="ml-auto flex items-center space-x-4">
                                        <TeamSwitcher />
                                        <ModeToggle />
                                        <UserNav />
                                    </div>
                                </div>
                            </div>
                            <div className={cn("bg-[#f4f6f7] h-screen overflow-y-auto")} style={{ backgroundColor: set_theme === "light" ? "#f4f6f7" : "#040c1e" }}>
                                {children}
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </TooltipProvider>
        </>
    )
}