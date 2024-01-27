"use client"
import { Nav } from "@/components/nav"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ActivitySquare, AlertCircle, Archive, ArchiveX, Banknote, BookUser, Coins, File, FileText, Home, Inbox, Landmark, Maximize, Menu, MessagesSquare, Minimize, Package, Send, Settings, ShoppingBasket, ShoppingCart, Trash2, Users, Users2, Wallet } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { accounts } from "./data"
import { AccountSwitcher } from "@/components/account-switcher"
import Cookies from 'js-cookie';
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/navbar-user"
import TeamSwitcher from "@/components/team-switcher"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/ModeToggle"
import { useTheme } from "next-themes"
import { ScrollArea } from "@/components/ui/scroll-area"
import SideBar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { ImperativePanelHandle } from "react-resizable-panels"



export default function DashboardRoot({ children }: { children: React.ReactNode }) {
    const layout = Cookies.get("react-resizable-panels:layout")
    const collapsed = Cookies.get("react-resizable-panels:collapsed")
    const defaultLayout = layout ? JSON.parse(layout) : [15, 85]
    const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;
    const [set_theme, setTheme] = useState<string>("light");
    const { theme } = useTheme();
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
    const [layout_a, setLayout] = useState(defaultLayout);
    const isMobile = useMediaQuery("(min-width: 768px)");
    const ref = useRef<ImperativePanelHandle>(null);
    const panel = ref.current;
    const [open, setOpen] = useState<boolean>(false);

    // useEffect(() => {
    //     if (isMobile) {
    //         setIsCollapsed(true);
    //     } else {
    //         setIsCollapsed(false);
    //     }
    // }, []);

    useEffect(() => {
        setTheme(theme || "light");
    }, [theme]);

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
                            defaultSize={layout_a[0]}
                            collapsedSize={4}
                            collapsible={true}
                            minSize={15}
                            maxSize={20}
                            ref={ref}
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
                            className={cn(isCollapsed && " transition-all duration-300 ease-in-out", "hidden 2xl:block xl:block md:block min-w-[50px]")}
                        >
                            <SideBar setLayout={setLayout} panel={panel} setCollapsed={setIsCollapsed} isCollapsed={isCollapsed} set_theme={set_theme} setOpen={setOpen} open={open} />
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={layout_a[1]} minSize={30}>
                            <div className="border-b">
                                <div className="flex h-16 items-center px-4">
                                    <div className="block 2xl:hidden xl:hidden md:hidden">
                                        <Sheet open={open} onOpenChange={setOpen}>
                                            <SheetTrigger>
                                                <Button size={"icon"}>
                                                    <Menu />
                                                </Button>
                                            </SheetTrigger>
                                            <SheetContent side={"left"} className="px-2 z-[9999999]">
                                                <SideBar setLayout={setLayout} panel={panel} setCollapsed={setIsCollapsed} isCollapsed={isCollapsed} set_theme={set_theme} setOpen={setOpen} open={open} />
                                            </SheetContent>
                                        </Sheet>
                                    </div>

                                    <MainNav className="mx-6" />
                                    <div className="ml-auto flex items-center space-x-4">

                                        <TeamSwitcher />
                                        <ModeToggle />
                                        <UserNav />
                                    </div>
                                </div>
                            </div>
                            <div className={cn("bg-[#f4f6f7] h-screen overflow-auto")} style={{ backgroundColor: set_theme === "light" ? "#f4f6f7" : "#040c1e" }}>
                                {children}
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </TooltipProvider>
        </>
    )
}